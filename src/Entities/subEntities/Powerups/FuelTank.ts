class FuelTank extends Entity {
  constructor(y: number) {
    const size = height * 0.07
    const health = 0
    const position = createVector(width, y)
    const img = images.powerups.fuelTank
    const points = random(5, 25)
    const damage = 0
    const isHit = false
    const sound = sounds.saved
    const hitBoxPosition = createVector(size * 0.02, size * 0.09)
    const hitBoxSize = createVector(size * .7 , size * .7)
    const velocity: p5.Vector = createVector(-2, 0)

    super(
      size,
      health,
      position,
      img,
      points,
      damage,
      isHit,
      sound,
      hitBoxSize,
      hitBoxPosition,
      velocity
    )
  }
}
