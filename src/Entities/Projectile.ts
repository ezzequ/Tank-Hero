class Projectile extends Entity{
    constructor(x : number, y : number) {
      const size = 40;
      const health = 1;
      const position = createVector(x, y); 
      const img = images.projectile;
      // const sound: p5.SoundFile = 2
      const points = 0
      const damage = 0
      const ishit = false
      const velocity: p5.Vector = createVector(5, 0);
      super(size, health, position, img, points, damage, ishit, velocity)
      
    }
  }
  // public update() {}


