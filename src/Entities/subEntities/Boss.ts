class Boss extends Entity {

  constructor(velo: number, y: number) {
    const size = height * 0.25
    const health = 5
    const position = createVector(width, y)
    const img = images.boss
    const sound = sounds.crash
    const points = 500
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-velo - 2, 0)
    super(size, health, position, img, points, damage, ishit, sound, velocity)
  }

  public draw() {
    super.draw();
  }

}
