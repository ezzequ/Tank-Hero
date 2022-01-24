class Boss extends Entity {

  constructor(velo: number) {
    const size = 300
    const health = 5
    const cityHeight = 260
    const y = ((height-400 - cityHeight) / 6) * ceil(random(6)) + cityHeight
    const position = createVector(width, y)
    const img = images.boss
    // const sound: p5.SoundFile = 2
    const points = 500
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-velo - 2, 0)
    super(size, health, position, img, points, damage, ishit, velocity)
  }

  public draw() {
    super.draw();
  }

}
