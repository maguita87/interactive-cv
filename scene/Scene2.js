class Scene2 extends Phaser.Scene {
  constructor() {
    super("Scene2");
  }
  preload() {
    this.load.image("background", "images/background.png");
    this.load.image("ground-1", "images/ground-1.png");
    this.load.image("ground-2", "images/ground-2.png");
    this.load.image("platforms-01", "images/platforms-01.png");
    this.load.image("platforms-02", "images/platforms-02.png");
    this.load.image("platforms-03", "images/platforms-03.png");
    this.load.image("platforms-04", "images/platforms-04.png");
    this.load.image("idle", "images/kid-idle1.png");
    this.load.image("idle2", "images/kid-idle2.png");
    this.load.image("run", "images/kid-anim1.png");
    this.load.image("run2", "images/kid-anim2.png");
    this.load.image("left", "images/kid-anim-left1.png");
    this.load.image("left2", "images/kid-anim-left2.png");
    this.load.image("diamond-rosa", "images/diamante-rosa.png");
    this.load.image("diamond-celeste", "images/diamante-celeste.png");
    this.load.image("diamond-celeste2", "images/diamante-celeste2.png");
    this.load.image("diamond-violeta", "images/diamante-violeta.png");
    this.load.image("ice-celeste", "images/ice-celeste.png");
    this.load.image("ice-violeta", "images/ice-violeta.png");
    this.load.image("ice-verde", "images/ice-verde.png");
    this.load.image("ice-rojo", "images/ice-rojo.png");
    this.load.image("unicorn", "images/unicorn.png");
    this.load.image("unicorn-left", "images/unicorn-left.png");
    this.load.image("sea-invisible", "images/sea-invisible.png");
    this.load.image("sea", "images/sea.png");
    this.load.image("wall", "images/wall.png");
    this.load.image("work", "images/diamond-invisible.png");
    this.load.image("dog", "images/dog.png");
    this.load.image("dog2", "images/dog2.png");
    this.load.image("on", "images/btn-soundon.png");
    this.load.image("on-hover", "images/btn-soundon-hover.png");
    this.load.image("off", "images/btn-soundoff.png");
    this.load.image("off-hover", "images/btn-soundoff-hover.png");
    this.load.audio("music", "sounds/splash.wav");
    this.load.audio("diamond", "sounds/diamond.mp3");
    this.load.audio("diamond-rosa", "sounds/diamond-rosa.mp3");

    this.load.image("work2", "images/work2.png");
    this.load.image("education", "images/education.png");
    this.load.image("skills", "images/skills.png");
    this.load.image("awards", "images/awards.png");
    this.load.image("keep", "images/btn-seguir-jugando.png");
    this.load.image("keep-hover", "images/btn-seguir-jugando-hover.png");
  }
  create() {
    this.music = this.sound.add("music", { volume: 0.1 });
    this.music.play({
      loop: true,
    });

    this.score = 0;
    let scoreText;
    let isOn = true;

    this.background = this.add.image(567, 339, "background");
    scoreText = this.add.text(25, 20, "score: 0", {
      fontSize: "30px",
      fill: "#D2187F",
      fontFamily: "Bebas Neue",
    });

    this.soundOff = this.add.image(1090, 39, "on");
    this.soundOff.setInteractive();
    this.soundOff.on("pointerover", () => this.add.image(1090, 39, "on-hover"));
    this.soundOff.on("pointerout", () => this.add.image(1090, 39, "on"));
    this.soundOff.on(
      "pointerdown",
      function () {
        if (isOn) {
          this.music.setVolume(0);
          isOn = false;
          this.add.image(1090, 39, "off");
          this.soundOff.on("pointerover", () =>
            this.add.image(1090, 39, "off-hover")
          );
          this.soundOff.on("pointerout", () => this.add.image(1090, 39, "off"));
        } else {
          this.music.setVolume(0.1);
          isOn = true;
          this.add.image(1090, 39, "on");
          this.soundOff.on("pointerover", () =>
            this.add.image(1090, 39, "on-hover")
          );
          this.soundOff.on("pointerout", () => this.add.image(1090, 39, "on"));
        }
      },
      this
    );

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(110, 620, "ground-1");
    this.platforms.create(919, 620, "ground-2");
    this.platforms.create(250, 500, "platforms-01");
    this.platforms.create(450, 500, "platforms-02");
    this.platforms.create(800, 500, "platforms-01");
    this.platforms.create(690, 430, "platforms-03");
    this.platforms.create(400, 170, "platforms-03");
    this.platforms.create(550, 260, "platforms-02");
    this.platforms.create(130, 290, "platforms-03");
    this.platforms.create(940, 292, "platforms-04");
    this.platforms.create(920, 160, "platforms-01");
    this.platforms.create(1050, 150, "platforms-02");
    this.platforms.create(690, 150, "platforms-02");
    this.platforms.create(405, 647, "sea-invisible");

    this.walls = this.physics.add.staticGroup();
    this.walls.create(200, 470, "wall"); //violeta
    this.walls.create(290, 490, "wall"); //violeta
    this.walls.create(590, 400, "wall"); //verde
    this.walls.create(790, 400, "wall"); //verde
    this.walls.create(770, 260, "wall"); //rojo
    this.walls.create(1110, 260, "wall"); //rojo
    this.walls.create(590, 550, "wall"); //suelo
    this.walls.create(1150, 550, "wall"); //suelo
    this.walls.create(30, 250, "wall"); //celeste
    this.walls.create(230, 250, "wall"); //celeste

    this.work = this.physics.add.sprite(450, 450, "work");
    this.education = this.physics.add.sprite(670, 100, "work");
    this.skills = this.physics.add.sprite(1050, 100, "work");
    this.awards = this.physics.add.sprite(150, 240, "work");

    this.diamondsPink = this.physics.add.staticGroup();
    this.diamondsPink.create(150, 240, "diamond-rosa").setScale(0.5);
    this.diamondsPink.create(670, 100, "diamond-rosa").setScale(0.5);
    this.diamondsPink.create(1050, 100, "diamond-rosa").setScale(0.5);
    this.diamondsPink.create(450, 450, "diamond-rosa").setScale(0.5);

    this.diamondsViolet = this.physics.add.staticGroup();
    this.diamondsViolet.create(630, 530, "diamond-violeta").setScale(0.5);
    this.diamondsViolet.create(680, 530, "diamond-violeta").setScale(0.5);
    this.diamondsViolet.create(730, 530, "diamond-violeta").setScale(0.5);

    this.diamonds = this.physics.add.staticGroup();
    this.diamonds.create(50, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(100, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(200, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(320, 120, "diamond-celeste").setScale(0.5);
    this.diamonds.create(370, 120, "diamond-celeste").setScale(0.5);
    this.diamonds.create(420, 120, "diamond-celeste").setScale(0.5);
    this.diamonds.create(470, 120, "diamond-celeste").setScale(0.5);
    this.diamonds.create(620, 380, "diamond-celeste").setScale(0.5);
    this.diamonds.create(670, 380, "diamond-celeste").setScale(0.5);
    this.diamonds.create(720, 380, "diamond-celeste").setScale(0.5);
    this.diamonds.create(770, 380, "diamond-celeste").setScale(0.5);
    this.diamonds.create(780, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(830, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(880, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(930, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(980, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(1030, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(1080, 240, "diamond-celeste").setScale(0.5);
    this.diamonds.create(720, 100, "diamond-celeste").setScale(0.5);
    this.diamonds.create(530, 210, "diamond-celeste").setScale(0.5);
    this.diamonds.create(580, 210, "diamond-celeste").setScale(0.5);

    this.dog = this.add.sprite(970, 518, "dog").setScale(0.5);

    this.iceCream = this.physics.add.group();
    this.iceCream.create(250, 450, "ice-violeta");
    this.iceCream.create(920, 400, "ice-rojo");
    this.iceCream.create(920, 242, "ice-rojo");
    this.iceCream.create(710, 350, "ice-verde");
    this.iceCream.create(850, 400, "ice-celeste");
    this.iceCream.create(130, 200, "ice-celeste");
    this.iceCream.children.iterate((child) => {
      child.setScale(0.5);
      child.body.velocity.x = 100;
    });

    this.sea = this.physics.add.sprite(405, 630, "sea-invisible");
    this.sea.setCollideWorldBounds(true);

    this.anims.create({
      key: "idle",
      frames: [{ key: "idle" }, { key: "idle2" }],
      frameRate: 4,
      repeat: -1,
    });

    this.anims.create({
      key: "dog",
      frames: [{ key: "dog" }, { key: "dog2" }],
      frameRate: 6,
      repeat: -1,
    });

    this.anims.create({
      key: "run",
      frames: [{ key: "run" }, { key: "run2" }],
      frameRate: 6,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: [{ key: "left" }, { key: "left2" }],
      frameRate: 6,
      repeat: -1,
    });

    this.kid = this.physics.add.sprite(50, 450, "idle");
    this.kid.setScale(0.5);

    this.unicorn = this.physics.add.image(300, 550, "unicorn");
    this.unicorn.body.velocity.x = 100;

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.kid, this.platforms);
    this.physics.add.collider(this.unicorn, this.platforms);
    this.physics.add.collider(this.work, this.platforms);
    this.physics.add.collider(this.education, this.platforms);
    this.physics.add.collider(this.skills, this.platforms);
    this.physics.add.collider(this.awards, this.platforms);

    this.physics.add.collider(this.iceCream, this.platforms);
    this.physics.add.collider(this.iceCream, this.walls);
    this.physics.add.collider(this.kid, this.sea, hitSea, null, this);

    function hitSea() {
      this.scene.restart();
    }

    this.physics.add.overlap(
      this.kid,
      this.diamonds,
      collectCeleste,
      null,
      this
    );
    this.physics.add.overlap(
      this.kid,
      this.diamondsViolet,
      collectViolet,
      null,
      this
    );
    this.work = this.physics.add.overlap(
      this.kid,
      this.work,
      workPopUp,
      null,
      this
    );
    this.education = this.physics.add.overlap(
      this.kid,
      this.education,
      educationPopUp,
      null,
      this
    );
    this.skills = this.physics.add.overlap(
      this.kid,
      this.skills,
      skillsPopUp,
      null,
      this
    );
    this.awards = this.physics.add.overlap(
      this.kid,
      this.awards,
      awardsPopUp,
      null,
      this
    );

    function workPopUp() {
      this.kid.body.moves = false;
      let diamondRosa = this.sound.add("diamond-rosa", { volume: 0.1 });
      diamondRosa.play();

      let popUp1 = this.add.group();
      let background1 = this.add.image(567, 339, "work2");
      let keepPlayingButton1 = this.add.sprite(340, 490, "keep").setScale(0.4);

      popUp1.add(background1);
      popUp1.add(keepPlayingButton1);

      this.input.on(
        "pointerdown",
        function () {
          popUp1.destroy(true, true);
          this.kid.body.moves = true;
        },
        this
      );
      this.work.destroy();
      this.physics.add.overlap(
        this.kid,
        this.diamondsPink,
        collectCeleste,
        null,
        this
      );
    }

    function educationPopUp() {
      this.kid.body.moves = false;
      let diamondRosa = this.sound.add("diamond-rosa", { volume: 0.1 });
      diamondRosa.play();
      let popUp2 = this.add.group();
      let background2 = this.add.image(567, 339, "education");
      let keepPlayingButton1 = this.add.sprite(340, 510, "keep").setScale(0.4);

      popUp2.add(background2);
      popUp2.add(keepPlayingButton1);

      this.input.on(
        "pointerdown",
        function () {
          popUp2.destroy(true, true);
          this.kid.body.moves = true;
        },
        this
      );

      this.education.destroy();
      this.physics.add.overlap(
        this.kid,
        this.diamondsPink,
        collectCeleste,
        null,
        this
      );
    }
    function skillsPopUp() {
      this.kid.body.moves = false;
      let diamondRosa = this.sound.add("diamond-rosa", { volume: 0.1 });
      diamondRosa.play();
      let popUp3 = this.add.group();
      let background3 = this.add.image(567, 339, "skills");
      let keepPlayingButton1 = this.add.sprite(340, 490, "keep").setScale(0.4);

      popUp3.add(background3);
      popUp3.add(keepPlayingButton1);

      this.input.on(
        "pointerdown",
        function () {
          popUp3.destroy(true, true);
          this.kid.body.moves = true;
        },
        this
      );

      this.skills.destroy();
      this.physics.add.overlap(
        this.kid,
        this.diamondsPink,
        collectCeleste,
        null,
        this
      );
    }
    function awardsPopUp() {
      this.kid.body.moves = false;
      let diamondRosa = this.sound.add("diamond-rosa", { volume: 0.1 });
      diamondRosa.play();
      let popUp4 = this.add.group();
      let background4 = this.add.image(567, 339, "awards");
      let keepPlayingButton1 = this.add.sprite(340, 490, "keep").setScale(0.4);

      popUp4.add(background4);
      popUp4.add(keepPlayingButton1);

      this.input.on(
        "pointerdown",
        function () {
          popUp4.destroy(true, true);
          this.kid.body.moves = true;
        },
        this
      );
      this.awards.destroy();
      this.physics.add.overlap(
        this.kid,
        this.diamondsPink,
        collectCeleste,
        null,
        this
      );
    }

    function collectCeleste(player, star) {
      let diamond = this.sound.add("diamond", { volume: 0.1 });
      diamond.play();
      star.disableBody(true, true);
      this.score += 10;
      scoreText.setText("Score: " + this.score);
    }

    function collectViolet(player, star) {
      let diamond = this.sound.add("diamond", { volume: 0.1 });
      diamond.play();
      star.disableBody(true, true);
      this.score += 30;
      scoreText.setText("Score: " + this.score);
    }

    this.kid.setCollideWorldBounds(true);
  }
  update() {
    this.dog.anims.play("dog", true);
    this.overlap = false;

    if (this.score == 340) {
      this.music.stop();
      this.scene.stop();
      this.scene.launch("finish");
    }

    this.iceCream.children.iterate((child) => {
      if (child.body.touching.right || child.body.blocked.right) {
        child.body.velocity.x = -100; // turn left
        child.flipX = true;
      } else if (child.body.touching.left || child.body.blocked.left) {
        // turn right
        child.flipX = false;
        child.body.velocity.x = 100; // turn right
      }
    });

    if (this.unicorn.body.touching.right || this.unicorn.body.blocked.right) {
      this.unicorn.body.velocity.x = -100; // turn left
      this.unicorn.flipX = true;
    } else if (
      this.unicorn.body.touching.left ||
      this.unicorn.body.blocked.left
    ) {
      // turn right
      this.unicorn.flipX = false;
      this.unicorn.body.velocity.x = 100; // turn right
    }

    if (this.cursorKeys.left.isDown && !this.isPaused) {
      this.kid.setVelocityX(-200);
      this.kid.anims.play("left", true);
    } else if (this.cursorKeys.right.isDown && !this.isPaused) {
      this.kid.setVelocityX(200);
      this.kid.anims.play("run", true);
    } else {
      this.kid.setVelocityX(0);
      this.kid.anims.play("idle", true);
    }

    if (
      this.cursorKeys.up.isDown &&
      this.kid.body.touching.down &&
      !this.isPaused
    ) {
      this.kid.setVelocityY(-480);
    }
  }
}
