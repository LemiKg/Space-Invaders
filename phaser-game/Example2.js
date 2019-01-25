class Example2 extends Phaser.Scene {
    constructor() {
        super({key: "Example2"});
    }

    create() {
        this.text = this.add.text(0,0, "Welcome to the Second Stage!", {font: "40px Impact"});

        var tween = this.tweens.add({
            targets: this.text,
            x: 200,
            y: 250,
            duration: 2000,
            ease: "Elastic",
            easeParams: [1.5,.5],
            delay: 1000,
            onComplete: function(src, tgt) {
                tgt[0].x = 0;
                tgt[0].y = 0;
                tgt[0].duration = 2000,
                tgt[0].ease = "Elastic",
                tgt[0].easeParams = [1.5,.5],
                tgt[0].delay = 1000;
            }
        }, this);

        this.input.keyboard.on("keyup", function(e){
            if (e.key == "1") {
                this.scene.start("Example1");
            }
        }, this);
    }
}