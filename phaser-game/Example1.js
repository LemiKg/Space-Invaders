class Example1 extends Phaser.Scene {
    constructor() {
        super({key:"Example1"});
    }

    preload() {
        this.load.image('character', 'assets/spaceship.png');
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('starfield', 'assets/starfield.png');
    }

    create() {
        starfield = this.add.tileSprite(0, 0, 6000, 4000, 'starfield');

        this.image = this.add.image(400, 300, 'character');

        // character.setCollideWorldBounds(true);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_SHIFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

        // this.input.on('pointerdown', function(e) {
        //     this.image.x = e.x;
        //     this.image.y = e.y;
        // }, this);

        this.input.on('pointerdown', function(e){
            var physicsImage = this.physics.add.image(this.image.x + 40, this.image.y + 50 , 'rocket');
            var physicsImage2 = this.physics.add.image(this.image.x - 40, this.image.y + 50 , 'rocket');
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(0, 0), -700);
            physicsImage2.setVelocity(Phaser.Math.RND.integerInRange(0, 0), -700);
        }, this);

        this.input.keyboard.on('keyup', function(e){
            if(e.key == "2") {
                this.scene.start("Example2");
            }
        }, this);
    }

    update() {
        starfield.tilePositionY -= 2;
        let speed = 2;
        if(this.key_SHIFT.isDown) {
            speed = 10;
        } else {
            speed = 2;
        }        
        if(this.key_A.isDown) this.image.x -= speed;
        if(this.key_D.isDown) this.image.x += speed;
        if(this.key_S.isDown) this.image.y += speed;
        if(this.key_W.isDown) this.image.y -= speed;
    }
}