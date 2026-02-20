const RenderManager = {
  animationInterval: null,
  animationDelay: 300, // default ms per frame

  setDelay(ms) {
    this.animationDelay = ms;
  },

  stop() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
  },

  renderArt(art, container) {
    this.stop();

    if (!art || !art.lines) return;

    const frames = art.lines;

    // If only one frame → static render
    if (frames.length === 1) {
      container.textContent = frames[0].join("\n");
      return;
    }

    let frameIndex = 0;

    container.textContent = frames[0].join("\n");

    this.animationInterval = setInterval(() => {
      frameIndex = (frameIndex + 1) % frames.length;
      container.textContent = frames[frameIndex].join("\n");
    }, this.animationDelay);
  }
};