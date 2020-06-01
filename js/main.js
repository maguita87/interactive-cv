let config = {
  width: 1134,
  height: 678,
  backgroundColor: 0xfef9b5,
  type: Phaser.AUTO,
  scene: [Scene1, BootScene, Scene7, PreloadScene, Scene2, Scene8],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 800 },
      debug: false,
    },
  },
  audio: {
    disableWebAudio: true,
  },
};

let game = new Phaser.Game(config);

WebFontConfig = {
  //  'active' means all requested fonts have finished loading
  //  We set a 1 second delay before calling 'createText'.
  //  For some reason if we don't the browser cannot render the text the first time it's created.
  active: function () {
    game.time.events.add(Phaser.Timer.SECOND, createText, this);
  },

  //  The Google Fonts we want to load (specify as many as you like in the array)
  google: {
    families: ["Bebas Neue"],
  },
};
