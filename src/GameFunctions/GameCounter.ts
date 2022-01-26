class GameCounter {
  //   private killedMonsters: number = 0
  // let entity : Entity === KilledMonster
  private heart: p5.Image
  private killedZombies: Entity[]
  private gameTimeScore: number
  private gameTime: number
  private killedHumans: Entity[]
  private hearts: p5.Image[]

  constructor() {
    this.heart = images.heart
    this.killedZombies = []
    this.gameTimeScore = 0
    this.gameTime = 0
    this.killedHumans = []
    this.hearts = [this.heart, this.heart, this.heart, this.heart]
  }

  public decreaseTankHealth() {
    this.hearts.pop()
  }

  public getLives() {
    return this.hearts.length
  }

  public countKilledZombies(zombie: Entity) {
    this.killedZombies.push(zombie)
  }

  public pointsPerSeconds() {
    this.gameTime += deltaTime
    if (this.gameTime > 100) {
      this.gameTimeScore += 2
      this.gameTime = 0
    }
  }

  public pointPerEntity(score: number) {
    this.gameTimeScore += score
  }

  public removePoint(score: number) {
    if (this.gameTimeScore > 0) {
      this.gameTimeScore -= score
    }
    this.gameTimeScore = 0
  }

  public drawHearts(tank: Tank) {
    let yNumber: number = -50
    for (let heart of this.hearts) {
      yNumber += 35
      image(
        heart,
        tank.position.x - tank.getSize() + 20,
        tank.position.y + yNumber,
        35,
        35
      )
    }
  }

  // private rescued() {
  //   // Return Number
  // }

  // private activeScore() {
  //   // Return Number
  // }

  // private totalScore() {
  //   // Return Number
  // }

  public update() {
    this.pointsPerSeconds()
  }

  public draw() {
    push()
    colorMode(HSL)
    fill(359, 53, 50)
    // rect(0, 0, windowWidth / 6, windowHeight / 6)
    quad(/*X1*/(width * .5) - 200,/*Y1*/0, /*X2*/(width * .5) + 250,/*Y2*/0, /*X3*/(width * .5) + 210, /*Y3*/50,/*X4*/ (width * .5) - 160, /*Y4*/50) 
    pop()
    push()
    fill(255)
    textSize(25)
    translate(width * .5, 25)
    // text(`Tank health ${this.hearts.length}`, 10, 30)
    text(`Zombies Killed ${this.killedZombies.length}`, 5, 5)
    text(`Score ${this.gameTimeScore}`, -150, 5)
    pop()
  }
}
