class Scene1 extends Phaser.Scene {
  constructor() {
    super("splash");
  }
  preload() {
    this.load.image("splash", "images/splash.png");
    this.load.image("btn", "images/btn-entrar.png");
    this.load.image("hover", "images/btn-entrar-hover.png");
  }
  create() {
    this.add.image(567, 339, "splash");
    let playButton = this.add.image(580, 566, "btn").setScale(0.4); //this.scene.width*.5, this.scene.height*.5//
    playButton.setInteractive();
    playButton.on("pointerdown", () => this.scene.start("instructions"));
    playButton.on("pointerover", () =>
      this.add.image(580, 566, "hover").setScale(0.4)
    );
    playButton.on("pointerout", () =>
      this.add.image(580, 566, "btn").setScale(0.4)
    );
  }
}
