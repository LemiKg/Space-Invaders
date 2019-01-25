var config = {
    type:Phaser.AUTO,
    width: 2000,
    height: 1000,
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y : Math.random(1000)}
        }
    },
    scene: [Example1, Example2]
};

var starfield;

var game = new Phaser.Game(config);