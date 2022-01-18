class Projectile extends Entity{
    constructor() {
      const size = 40;
      const health = 1;
      const position = createVector(width * .2, height * .3); 
      const img = images.projectile;
      // const sound: p5.SoundFile = 2
      const points = 0
      const damage = 0
      const ishit = false
      const velocity: p5.Vector = createVector(20, 0);
      super(size, health, position, img, points, damage, ishit, velocity)
    }

    public draw(x : number, y : number) {
      image(images.projectile, x + 110, y +35, 40, 40)
    }
  }
  // public update() {}


