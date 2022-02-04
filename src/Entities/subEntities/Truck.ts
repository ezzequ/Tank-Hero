class Truck extends Entity {
  constructor(y: number) {
    const size = height * .12
    const health = 1
    const position = createVector(width, y)
    const sound = sounds.crash
    const img = images.obstacles.obs1
    const points = 0
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-2, 0)
    const hitBoxPosition = createVector(size * .01, size * .01)
    const hitBoxSize = createVector(size, size)


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
