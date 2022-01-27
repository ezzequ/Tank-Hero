class Obstacle extends Entity {
  constructor(y: number) {
    const size = 110
    const health = 1
    const position = createVector(width, y)
    //const position = createVector(width, height / random(6))
    // const sound: p5.SoundFile = 2
    const img = images.obstacles.obs1
    const points = 0
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-2, 0)
    super(size, health, position, img, points, damage, ishit, velocity)
  }
}
