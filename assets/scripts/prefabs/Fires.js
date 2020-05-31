class Fires extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);
    }


    createFire(sourсe) {
        let fire = this.getFirstDead();

        if (!fire) {
            fire = Fire.generate(this.scene, sourсe)
            this.add(fire);
        } else {
            fire.reset(sourсe.x, sourсe.y);
        }
        fire.move();
    }
}