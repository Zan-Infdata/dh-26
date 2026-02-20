

const StoryManager = {
  history: [],
  flags: {},
  typingSpeed: 30, // default ms per character

  TypingSound: null,

  initSound() {
    TypingSound = document.getElementById("typing-sound");
    TypingSound.volume = 0.05;
  },

  async start(sceneId, typingSpeed = 30) {
    this.history = [];
    this.flags = {};
    this.typingSpeed = typingSpeed;
    await this.goToScene(sceneId);
  },

  async goToScene(sceneId) {
    this.history.push(sceneId);

    const scene = await Loader.loadScene(sceneId);
    const art = scene.artId ? await Loader.loadArt(scene.artId) : null;

    this.renderScene(scene, art);
  },

  renderScene(scene, art) {
    const textPanel = document.getElementById("text-panel");
    const artPanel = document.getElementById("art-panel");

    textPanel.innerHTML = "";
    artPanel.textContent = "";

    if (art) artPanel.textContent = art.lines.join("\n");

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
        scene.choices.forEach((choice, index) => {
          const div = document.createElement("div");
          div.className = "choice";
          div.textContent = `${index + 1}) ${choice.text}`;
          div.onclick = () => this.resolveChoice(choice);
          textPanel.appendChild(div);
        });
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

    if (nextId) await this.goToScene(nextId);
  }
};