class Zombie extends Entity {
  constructor(velo: number, y: number) {
    const size = height * 0.15
    const health = 3
    const position = createVector(width, y)
    const img = images.zombies.zom1
    const points = 100
    const damage = 0
    const ishit = false
    const sound = sounds.zombieEat
    const hitBoxSize: p5.Vector = createVector(size * 0.3, size * 0.9)
    const hitBoxPosition = createVector(size * 0.2, size * 0.09)
    const velocity: p5.Vector = createVector(-velo - 2, 0)

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
