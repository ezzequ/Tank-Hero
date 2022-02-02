class Tank extends Entity {
  private reloadTime: number

  constructor() {
    const size = height * 0.2
    const health = 4
    const position = createVector(width * 0.2, height * 0.5)
    const img = images.tank
    const points = 0
    const damage = 0
    const ishit = false
    const sound = sounds.zombieEat
    const velocity: p5.Vector = createVector(0, 0)
    const hitBoxSize: p5.Vector = createVector(size, size * 0.5)
    const hitBoxPosition = createVector(size * 0.02, size * 0.35)

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
    this.reloadTime = 250
  }

  public move() {
    //Röra tanken i X-led bakåt
    if (this.position.x > width * 0.2) {
      if (keyIsDown(37)) {
        this.position.x -= width * 0.006
      }
    } else {
      this.position.x = width * 0.2
    }

    //Röra tanken i X-led framåt
    if (this.position.x < width - this.size) {
      if (keyIsDown(39)) {
        this.position.x += width * 0.003
      }
    } else {
      this.position.x = width - this.size
    }

    //Röra tanken i Y-led nedåt
    if (this.position.y < height - this.size) {
      if (keyIsDown(40)) {
        this.position.y += height * 0.005
      }
    } else {
      this.position.y = height - this.size
    }

    //Röra tanken i Y-led uppåt
    if (this.position.y > height / 13 + this.size) {
      if (keyIsDown(38)) {
        this.position.y -= height * 0.005
      }
    } else {
      this.position.y = height / 13 + this.size
    }
  }

  private fireShot() {
    this.reloadTime -= deltaTime
    if (keyIsDown(32) && this.reloadTime < 0) {
      sounds.shot.play()
      this.reloadTime = 250
      return new Projectile(
        this.position.x + (this.size - this.size * 0.15),
        this.position.y + (this.size - this.size * 0.25) / 2
      )
    }
    return undefined
  }

  public update() {
    this.move()
    super.update()
    return this.fireShot()
  }
}
