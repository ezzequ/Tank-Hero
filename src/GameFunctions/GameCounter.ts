class GameCounter {
  public heart: p5.Image
  public hearts: p5.Image[]
  public killedZombies: Entity[]
  public gameTimeScore: number
  private gameTime: number
  public fuelLimit: number
  private killedHumans: Entity[]
  public rescuedHumans: Entity[]
  private gameFont = new p5.Font()
  public tScore : number

  constructor() {
    this.gameFont = font.gameFont
    this.heart = images.heart
    this.killedZombies = []
    this.gameTimeScore = 0
    this.gameTime = 0
    this.fuelLimit = 60
    this.killedHumans = []
    this.rescuedHumans = []
    this.tScore = 0
    this.hearts = [this.heart, this.heart, this.heart, this.heart]
    
  }

  public countDownTimer() {
    this.fuelLimit = this.fuelLimit - deltaTime / 1000
    if (this.fuelLimit < 0) {
      game.gameOver()
    }
  }

  public decreaseTankHealth() {
    this.hearts.pop()
  }

  public getLives() {
    return this.hearts.length
  }

  public countKilledZombies(zombie: Entity) {
    localStorage.setItem('zombies', `${this.killedZombies.length}`)
    this.killedZombies.push(zombie)
    storeItem('totalKilledZombies', this.killedZombies.length)
  }

  public countKilledHumans(human: Entity) {
    this.killedHumans.push(human)
  }

  public countRescuedHumans(human: Entity) {
    this.rescuedHumans.push(human)
  }

  public getRescuedHumanCount() {
    return this.rescuedHumans
  }

  public pointsPerSeconds() {
    this.gameTime += deltaTime
    if (this.gameTime > 100) {
      this.gameTimeScore += 2
      this.gameTime = 0
    }
    storeItem('totalPoints', this.gameTimeScore)
  }

  public pointPerEntity(score: number) {
    this.gameTimeScore += score
  }

  public removePoint(score: number) {
    if (this.gameTimeScore > 0) {
      this.gameTimeScore -= score
      if (this.gameTimeScore < 0) {
        this.gameTimeScore = 0
      }
    }
  }

  public drawHearts(tank: Tank) {
    let heartSize: number = height * .03
    let yNumber: number = tank.getSize() - (tank.getSize() * .8)
    for (let heart of this.hearts) {
      yNumber += heartSize
      image(
        heart,
        tank.position.x - tank.getSize() * .25,
        tank.position.y + yNumber,
        heartSize,
        heartSize
      )
    }
  }

  private soundInfo() {
    return game.isMusic ? 'ON' : 'OFF'
  }


  public update() {
    this.pointsPerSeconds()
    this.countDownTimer()
  }

  public draw() {
    textFont(this.gameFont)
    push()
    colorMode(HSL)
    fill(359, 53, 50)
    quad(
      /*X1*/ width * .5 - 200,
      /*Y1*/ 0,
      /*X2*/ width * .5 + 250,
      /*Y2*/ 0,
      /*X3*/ width * .5 + 210,
      /*Y3*/ 50,
      /*X4*/ width * .5 - 160,
      /*Y4*/ 50
    )
    fill(340, 10, 11)
    quad(
      /*X1*/ width * .5 - 160,
      /*Y1*/ 50,
      /*X2*/ width * .5 + 210,
      /*Y2*/ 50,
      /*X3*/ width * .5 + 170,
      /*Y3*/ 100,
      /*X4*/ width * .5 - 120,
      /*Y4*/ 100
    )
    pop()
    push()
    fill(255)
    textSize(18)
    translate(width * .5, 25)
    text(`Zombies Killed ${this.killedZombies.length}`, 5, 5)
    text(`Score ${this.gameTimeScore}`, -150, 5)
    text(`Fuel ${round(this.fuelLimit)}`, -80, 55)
    text(`Sound ${this.soundInfo()}`, 30, 55)
    pop()
  }
}
