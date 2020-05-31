class Scene7 extends Phaser.Scene{
    constructor(){
        super('instructions')
    };
    preload(){
        this.load.image('instructions', 'images/instructions.png');
        this.load.image('jugar', 'images/btn-jugar.png');
        this.load.image('jugar-hover', 'images/btn-jugar-hover.png');
        }

    create() { 
 
        this.add.image(567, 339, 'instructions');
        let keepPlayingButton = this.add.image(335, 470, 'jugar').setScale(.4)//this.scene.width*.5, this.scene.height*.5//
        keepPlayingButton.setInteractive()
        keepPlayingButton.on('pointerdown', function () {
            this.scene.stop();
            this.scene.start('boot'); 
            },this);

        keepPlayingButton.on('pointerover', () =>  this.add.image(335, 470, 'jugar-hover').setScale(.4) )
        keepPlayingButton.on('pointerout', () => this.add.image(335, 470, 'jugar').setScale(.4));



     }
    
};