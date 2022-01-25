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
    if (this.hearts.length == 0) {
      console.log('game over')
      // alert('Game over')
    }
  }
  public countKilledZombies(zombie: Entity) {
    this.killedZombies.push(zombie)
  }

  public pointsPerSeconds() {
    this.gameTime += deltaTime
    if (this.gameTime > 100) {
      this.gameTimeScore += 10
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
    fill(108, 102, 0)
    rect(0, 0, windowWidth / 6, windowHeight / 6)
    fill(45)
    textSize(22)
    text(`Tank health ${this.hearts.length}`, 10, 30)
    text(`Zombies Killed ${this.killedZombies.length}`, 10, 70)
    text(`Score ${this.gameTimeScore}`, 10, 110)
  }
}
