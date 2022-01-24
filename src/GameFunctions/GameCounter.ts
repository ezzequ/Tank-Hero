class GameCounter {
  //   private killedMonsters: number = 0
  // let entity : Entity === KilledMonster
  private tankHealth: number
  private killedZombies: Entity[]
  private gameTimeScore: number
  private gameTime: number
  private killedHumans: Entity[]

  constructor() {
    this.tankHealth = 4
    this.killedZombies = []
    this.gameTimeScore = 0
    this.gameTime = 0
    this.killedHumans = []
  }

  public decreaseTankHealth() {
    this.tankHealth = this.tankHealth - 1
    console.log(`TANK LIV ${this.tankHealth}`)
  }

  public countKilledZombies(zombie: Entity) {
    this.killedZombies.push(zombie)
  }

  public pointsPerSeconds() {
    this.gameTime += deltaTime
    if (this.gameTime > 100) {
      this.gameTimeScore += 1
      this.gameTime = 0
    }
  }

  public pointPerEntity(score: number) {
    this.gameTimeScore += score
  }

  public removePoint(score: number) {
    if(this.gameTimeScore > 0) {
      this.gameTimeScore -= score

    } 
    this.gameTimeScore = 0
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
    text(`Tank health ${this.tankHealth}`, 10, 30)
    text(`Zombies Killed ${this.killedZombies.length}`, 10, 70)
    text(`Score ${this.gameTimeScore}`, 10, 110)
  }
}
