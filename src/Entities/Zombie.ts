class Zombie extends Entity {
  constructor() {
    const size = 120;
    const health = 1;
    const position = createVector(width -120, height / random(6)); 
    const img = images.zombie;
    // const sound: p5.SoundFile = 2
    const points = 0
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-2, 0);
    super(size, health, position, img, points, damage, ishit, velocity)
  }
}
