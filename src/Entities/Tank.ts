class Tank extends Entity {

  constructor() {
    const size = 100;
    const health = 4;
    const position = createVector(width * .20, height * .5);
    const img = images.tank;
    // const sound: p5.SoundFile = 2
    const points = 0
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(0, 0);
    
    super(size, health, position, img, points, damage, ishit, velocity)
  }
  //   private shoot() {}

  move(){
    if (keyIsDown(38)) {
      this.position.y -= 5
    } 
    if (keyIsDown(40)) {
      this.position.y += 5
    }
  }

  // public update() {
    
  // }

}
