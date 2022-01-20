class GameBoard {
  private background: p5.Image
  private xPos: number
  private xPos2: number

  private scrollSpeed: number
  private gameCounter: GameCounter
  private entities: Entity[]
  private tank: Tank
  private sideBoard: SideBoard
  private spawnTime: number

  constructor() {
    this.gameCounter = new GameCounter()
    this.sideBoard = new SideBoard()
    this.tank = new Tank()
    this.entities = [new Zombie(), new Obstacle(), new Human()]

    this.background = images.bgImg
    this.xPos = 0
    this.xPos2 = width
    this.scrollSpeed = 2
    this.spawnTime = 2000
  }

  private scroll() {
    image(this.background, this.xPos, 0, width, height)
    image(this.background, this.xPos2, 0, width, height)

    this.xPos -= this.scrollSpeed
    this.xPos2 -= this.scrollSpeed

    if (this.xPos < -width) {
      this.xPos = width
    }
    if (this.xPos2 < -width) {
      this.xPos2 = width
    }
  }

  private spawnEntity() {
    this.spawnTime -= deltaTime
    if (this.spawnTime < 0) {
      // const cityHeight = 260
      // const y = ((height - cityHeight) / 6) * ceil(random(6)) + cityHeight;
      this.entities.push(new Zombie(this.scrollSpeed))
      this.spawnTime = 2000
    }
  }

  //   private checkCollision() {
  //     // Return Void
  //   }

  //   private entityEndOfLine() {
  //     // Return Void
  //   }

  //   private killSurviour() {
  //     // Return Void
  //   }
  public update() {
    // Return Void
    this.spawnEntity()
    const newProjectile = this.tank.update()
    if (newProjectile) {
      this.entities.push(newProjectile)
    }
    //this.spawnEntities().update()
    for (const entity of this.entities) {
      entity.update()
    }
  }

  public draw() {
    this.scroll()
    this.tank.draw()
    this.sideBoard.draw()
    this.gameCounter.draw()

    for (const entity of this.entities) {
      entity.draw()
    }
    //this.spawnEntities().draw()

    //console.log(this.renderZombie())
  }
}
