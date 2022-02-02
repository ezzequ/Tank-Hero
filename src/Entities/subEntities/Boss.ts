class Boss extends Entity {
  constructor(velo: number, y: number) {
    const size = height * 0.25
    const health = 5
    const position = createVector(width, y)
    const img = images.boss
    const sound = sounds.bossDeath
    const points = 500
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-velo - 2, 0)
    const hitBoxPosition = createVector(size * .1 , size * .2 )
    const hitBoxSize = createVector(size * 0.74, size * .7)

    super(
      size,
      health,
      position,
      img,
      points,
      damage,
      ishit,
      sound,
      hitBoxSize,
      hitBoxPosition,
      velocity
    )
  }

  public draw() {
    super.draw()
  }
}
