class Scene8 extends Phaser.Scene {
  constructor() {
    super("finish");
  }
  preload() {
    this.load.image("finish", "images/finish.png");
    this.load.image("volver", "images/btn-volver.png");
    this.load.image("volver-hover", "images/btn-volver-hover.png");
    this.load.audio("win", "sounds/win.wav");
  }

  create() {
    this.win = this.sound.add("win", { volume: 0.1 });
    this.win.play();

    this.add.image(567, 339, "finish");
    let keepPlayingButton = this.add.image(570, 490, "volver").setScale(0.5); //this.scene.width*.5, this.scene.height*.5//
    keepPlayingButton.setInteractive();
    keepPlayingButton.on(
      "pointerdown",
      function () {
        this.scene.stop();
        this.win.stop();
        this.scene.start("Scene2");
      },
      this
    );

    keepPlayingButton.on("pointerover", () =>
      this.add.image(570, 490, "volver-hover").setScale(0.5)
    );
    keepPlayingButton.on("pointerout", () =>
      this.add.image(570, 490, "volver").setScale(0.5)
    );

    let url = "https://www.behance.net/magalimorales";

    let portfolio = this.add.text(480, 560, "Mira mi portfolio aca", {
      fontSize: "25px",
      fill: "#fef9b5",
      fontFamily: "Bebas Neue",
    });
    portfolio.setInteractive();
    portfolio.on("pointerup", () => {
      window.open(url, "_blank");
    });
    portfolio.on("pointerover", () => {
      portfolio.setStyle({ fill: "#009f62" }), this;
    });
    portfolio.on("pointerout", () => {
      portfolio.setStyle({ fill: "#fef9b5" }), this;
    });
  }
}
