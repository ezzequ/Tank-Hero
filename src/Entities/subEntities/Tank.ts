class Tank extends Entity {
  private reloadTime: number

  constructor() {
    const size = 100
    const health = 4
    const position = createVector(width * 0.2, height * 0.5)
    const img = images.tank
    const points = 0
    const damage = 0
    const ishit = false
    const sound = sounds.crash
    const velocity: p5.Vector = createVector(0, 0)

    super(size, health, position, img, points, damage, ishit, sound, velocity)
    this.reloadTime = 250
  }

  public move() {
    //Röra tanken i X-led bakåt
    if (this.position.x > width * 0.2) {
      if (keyIsDown(37)) {
        this.position.x -= (width * .0065)
      }
    } else {
      this.position.x = width * 0.2
    }
    //Röra tanken i X-led framåt
    if (this.position.x < width - 100) {
      if (keyIsDown(39)) {
        this.position.x += (width * .003)
      }
    } else {
      this.position.x = width - 100
    }

    //Röra tanken i Y-led nedåt
    if (this.position.y < height - 100) {
      if (keyIsDown(40)) {
        this.position.y += (height * .005)
      }
    } else {
      this.position.y = height - 100
    }
    //Röra tanken i Y-led uppåt
    if (this.position.y > height / 6 + 130) {
      if (keyIsDown(38)) {
        this.position.y -= (height * .005)
      }
    } else {
      this.position.y = height / 6 + 130
    }
  }

  private fireShot() {
    this.reloadTime -= deltaTime
    if (keyIsDown(32) && this.reloadTime < 0) {
      sounds.shot.play()
      this.reloadTime = 400
      return new Projectile(this.position.x, this.position.y)
    }
  }

  public update() {
    this.move()
    super.update()
    return this.fireShot()
  }
}
