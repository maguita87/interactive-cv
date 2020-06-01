class BootScene extends Phaser.Scene {
  constructor() {
    super("boot");
  }

  preload() {
    this.load.image("loading", "images/loading.png");
  }

  create() {
    this.scene.start("preloader");
  }
}
