class Boss extends Entity {
  constructor(velo: number) {
    const size = 500
    const health = 5
    const cityHeight = 260
    const y = ((height - cityHeight) / 6) * ceil(random(6)) + cityHeight
    const position = createVector(width, y)
    const img = images.boss
    // const sound: p5.SoundFile = 2
    const points = 100
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-velo - 2, 0)
    super(size, health, position, img, points, damage, ishit, velocity)
  }
}
