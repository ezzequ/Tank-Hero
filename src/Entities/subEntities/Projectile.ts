class Projectile extends Entity {
  constructor(x: number, y: number) {
    const size = height * .05
    const health = 1
    const position = createVector(x, y)
    const img = images.projectile
    const sound = sounds.crash
    const points = 0
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(10, 0)
    const hitBoxPosition = createVector(size * .1, size * .2)
    const hitBoxSize = createVector(size, size * .5)


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
}
