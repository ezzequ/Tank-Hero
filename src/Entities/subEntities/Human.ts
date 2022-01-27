class Human extends Entity {
  constructor(y: number) {
    const size = height * .12
    const health = 1
    const position = createVector(width, y)
    //const position = createVector(width - 200, height / random(6))
    const img = images.human
    // const sound: p5.SoundFile = 2
    const points = 10
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-2, 0)
    super(size, health, position, img, points, damage, ishit, velocity)
  }
}
