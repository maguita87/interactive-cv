class PreloadScene extends Phaser.Scene{
    constructor(){
        super('preloader')
    };

preload() {

    this.add.image(567, 339, 'loading');
    this.graphics = this.add.graphics();
    this.newGraphics = this.add.graphics();

    var progressBarFill = new Phaser.Geom.Rectangle(205, 205, 290, 40);

    this.newGraphics.fillStyle(0xFFFFFF, 1);
    this.newGraphics.fillRectShape(progressBarFill);


    this.load.image('background', 'images/background.png');
    this.load.image('ground-1', 'images/ground-1.png');
    this.load.image('ground-2', 'images/ground-2.png');
    this.load.image('platforms-01', 'images/platforms-01.png');
    this.load.image('platforms-02', 'images/platforms-02.png');
    this.load.image('platforms-03', 'images/platforms-03.png');
    this.load.image('platforms-04', 'images/platforms-04.png');
    this.load.image('idle' , 'images/kid-anim1.png');
    this.load.image('idle2' , 'images/kid-idle2.png');
    this.load.image('run' , 'images/kid-anim1.png');
    this.load.image('run2' , 'images/kid-anim2.png');
    this.load.image('left' , 'images/kid-anim-left1.png');
    this.load.image('left2' , 'images/kid-anim-left2.png');
    this.load.image('diamond-rosa' , 'images/diamante-rosa.png');
    this.load.image('diamond-celeste' , 'images/diamante-celeste.png');
    this.load.image('diamond-violeta' , 'images/diamante-violeta.png');
    this.load.image('ice-celeste' , 'images/ice-celeste.png');
    this.load.image('ice-violeta' , 'images/ice-violeta.png');
    this.load.image('ice-verde' , 'images/ice-verde.png');
    this.load.image('ice-rojo' , 'images/ice-rojo.png');
    this.load.image('unicorn' , 'images/unicorn.png');
    this.load.image('unicorn-left' , 'images/unicorn-left.png');
    this.load.image('sea-invisible' , 'images/sea-invisible.png');
    this.load.image('sea' , 'images/sea.png');
    this.load.image('wall' , 'images/wall.png');
    this.load.image('work' , 'images/diamond-invisible.png');
    this.load.image('dog' , 'images/dog.png');
    this.load.image('dog2' , 'images/dog2.png');
    this.load.image('on' , 'images/btn-soundon.png');
    this.load.image('on-hover' , 'images/btn-soundon-hover.png');
    this.load.image('off' , 'images/btn-soundoff.png');
    this.load.image('off-hover' , 'images/btn-soundoff-hover.png');
    this.load.audio('music', 'sounds/splash.wav');
    this.load.audio('diamond', 'sounds/diamond.mp3')
    this.load.audio('diamond-rosa', 'sounds/diamond-rosa.mp3')

    this.load.image('work2', 'images/work2.png');
    this.load.image('education', 'images/education.png');
    this.load.image('skills', 'images/skills.png');
    this.load.image('awards', 'images/awards.png');
    this.load.image('keep', 'images/btn-seguir-jugando.png');
    this.load.image('keep-hover', 'images/btn-seguir-jugando-hover.png');


    this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics});
    this.load.on('complete', this.complete);
}



updateBar(percentage) {
    this.newGraphics.clear();
    this.newGraphics.fillStyle(0xFFFFFF, 1);
    this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(300, 375, percentage*500, 20));

}

complete = () => {
    this.scene.start('Scene2');
}
}