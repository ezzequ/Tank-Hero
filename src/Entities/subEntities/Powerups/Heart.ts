class Heart extends Entity {
  constructor(y: number) {
    const size = height * 0.07
    const health = 0
    const position = createVector(width, y)
    const img = images.powerups.heart
    const points = 1
    const damage = 0
    const isHit = false
    const sound = sounds.saved
    const velocity: p5.Vector = createVector(-2, 0)
    super(size, health, position, img, points, damage, isHit, sound, velocity)
  }
}
