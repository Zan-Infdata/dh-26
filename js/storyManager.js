

const StoryManager = {
  history: [],
  flags: {},
  typingSpeed: 30, // default ms per character

  TypingSound: null,
  Beep1Sound: null,
  Beep2Sound: null,

  selectedIndex: 0,
  currentChoices: [],

  initSound() {
    TypingSound = document.getElementById("typing-sound");
    TypingSound.volume = 0.05;
    Beep1Sound = document.getElementById("beep1");
    TypingSound.volume = 0.1;
    Beep2Sound = document.getElementById("beep2");
    TypingSound.volume = 0.1;
  },

  async start(sceneId, typingSpeed = 30) {
    this.history = [];
    this.flags = {};
    this.typingSpeed = typingSpeed;
    await this.goToScene(sceneId);
  },

  async goToScene(sceneId) {
    this.history.push(sceneId);
    
    document.removeEventListener("keydown", this.keyHandler);

    const scene = await Loader.loadScene(sceneId);
    const art = scene.artId ? await Loader.loadArt(scene.artId) : null;

    RenderManager.stop();

    this.renderScene(scene, art);
  },

  renderScene(scene, art) {
    const textPanel = document.getElementById("text-panel");
    const artPanel = document.getElementById("art-panel");

    textPanel.innerHTML = "";
    artPanel.textContent = "";

    RenderManager.renderArt(art, artPanel);

    // Start typing text
    this.typeText(scene.text, textPanel, () => {
      // Typing finished → add cursor
      let cursor = document.createElement("span");
      cursor.id = "terminal-cursor";
      cursor.className = "cursor";
      cursor.textContent = "_";
      textPanel.appendChild(cursor);

      // Render choices
      if (scene.choices && scene.choices.length) {
        this.currentChoices = scene.choices || [];
        this.selectedIndex = 0;

        if (this.currentChoices.length) {
          this.currentChoices.forEach((choice, index) => {
            const div = document.createElement("div");
            div.className = "choice";
            div.dataset.index = index;
            div.onclick = () => {
              this.selectedIndex = index;
              this.updateSelection();
              this.resolveChoice(choice);
            };
            textPanel.appendChild(div);
          });

          this.updateSelection();
          this.enableKeyboard();
        }
      }
    });
  },

  enableKeyboard() {
    this.keyHandler = (e) => {
      if (!this.currentChoices.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        this.selectedIndex =
          (this.selectedIndex + 1) % this.currentChoices.length;
        this.updateSelection();
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        this.selectedIndex =
          (this.selectedIndex - 1 + this.currentChoices.length) %
          this.currentChoices.length;
        this.updateSelection();
      }

      if (e.key === "Enter") {
        e.preventDefault();
        const choice = this.currentChoices[this.selectedIndex];
        document.removeEventListener("keydown", this.keyHandler);
        this.resolveChoice(choice);
      }
    };

    document.addEventListener("keydown", this.keyHandler);
  },

  updateSelection() {

    const sound = Beep1Sound.cloneNode();
    sound.play().catch(() => {});

    const elements = document.querySelectorAll(".choice");

    elements.forEach((el, i) => {
      const text = this.currentChoices[i].text;

      if (i === this.selectedIndex) {
        el.innerHTML = `● ${text}`;
        el.style.color = "#ffffff";
      } else {
        el.innerHTML = `○ ${text}`;
        el.style.color = "#ff0";
      }
    });
  },
  
  typeText(text, container, callback) {
    let i = 0;
    const interval = setInterval(() => {
      container.appendChild(document.createTextNode(text[i]));
      container.scrollTop = container.scrollHeight;

      // Play sound if initialized and character is visible
      if (TypingSound && text[i] !== " " && text[i] !== "\n") {
        const sound = TypingSound.cloneNode();
        sound.play().catch(() => {});
      }

      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, this.typingSpeed);
  },

  async resolveChoice(choice) {
    // Record flags
    if (choice.flag) this.flags[choice.flag] = true;

    // Determine next scene
    let nextId;
    if (typeof choice.next === "function") {
      nextId = choice.next(this.history, this.flags);
    } else {
      nextId = choice.next;
    }

    const sound = Beep2Sound.cloneNode();
    sound.play().catch(() => {});

    if (nextId) await this.goToScene(nextId);
  }
};