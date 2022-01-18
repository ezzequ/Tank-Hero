class Human extends Entity {
  constructor() {
    const size = 110;
    const health = 1;
    const position = createVector(width - 200, height * .8); 
    const img = images.human;
    // const sound: p5.SoundFile = 2
    const points = 0
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(0, 0);
    super(size, health, position, img, points, damage, ishit, velocity)
  }
}
