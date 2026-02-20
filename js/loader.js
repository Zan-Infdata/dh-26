const Loader = {
  async loadScene(sceneId) {
    return ScenesData[sceneId];
  },

  async loadArt(artId) {
    return ArtData[artId];
  }
};