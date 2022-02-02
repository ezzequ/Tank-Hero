class Tank extends Entity {
  private reloadTime: number

  constructor() {
    const size = height * .2
    const health = 4
    const position = createVector(width * .2, height * .5)
    const img = images.tank
    const points = 0
    const damage = 0
    const ishit = false
    const sound = sounds.zombieEat
    const velocity: p5.Vector = createVector(0, 0)
    const hitBoxSize: p5.Vector = createVector(size, size * .5)
    const hitBoxPosition = createVector(size * .02, size * .35)

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
    if (this.position.x > width * .187) {
      if (keyIsDown(37)) {
        this.position.x -= width * .006
      }
    } else {
      this.position.x = width * .187
    }

    //Röra tanken i X-led framåt
    if (this.position.x < width - this.size) {
      if (keyIsDown(39)) {
        this.position.x += width * .003
      }
    } else {
      this.position.x = width - this.size
    }

    //Röra tanken i Y-led nedåt
    if (this.position.y < height - (this.size * .85)) {
      if (keyIsDown(40)) {
        this.position.y += height * .005
      }
    } else {
      this.position.y = height - (this.size * .85)
    }

    //Röra tanken i Y-led uppåt
    if (this.position.y > height * .065 + this.size) {
      if (keyIsDown(38)) {
        this.position.y -= height * .005
      }
    } else {
      this.position.y = height * .065 + this.size
    }
  }

  private fireShot() {
    this.reloadTime -= deltaTime
    if (keyIsDown(32) && this.reloadTime < 0) {
      sounds.shot.play()
      this.reloadTime = 250
      return new Projectile(
        this.position.x + (this.size - this.size * .15),
        this.position.y + (this.size - this.size * .25) / 2
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
