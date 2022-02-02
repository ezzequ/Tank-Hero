class Boss extends Entity {
  constructor(velo: number, y: number) {
    const size = height * .25
    const health = 5
    const position = createVector(width, y)
    const img = images.boss
    const sound = sounds.bossDeath
    const points = 500
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-velo - 2, 0)
    const hitBoxPosition = createVector(size * .02, size * .09)
    const hitBoxSize = createVector(size * .6, size * .9)

    super(
      size,
      health,
      position,
      img,
      points,
      damage,
      ishit,
      sound,
      hitBoxPosition,
      hitBoxSize,
      velocity
    )
  }

  public draw() {
    super.draw()
  }
}
