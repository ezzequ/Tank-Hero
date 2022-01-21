class GameBoard {
  private background: p5.Image
  private xPos: number
  private xPos2: number

  private scrollSpeed: number
  private gameCounter: GameCounter
  private entities: Entity[]
  private tank: Tank
  private sideBoard: SideBoard
  private zombieSpawnTime: number
  private humanSpawnTime: number
  private obstacleSpawnTime: number
  private gameTime: number

  constructor() {
    this.gameCounter = new GameCounter()
    this.sideBoard = new SideBoard()
    this.tank = new Tank()
    this.entities = []

    this.background = images.bgImg
    this.xPos = 0
    this.xPos2 = width
    this.scrollSpeed = 2
    this.zombieSpawnTime = 2000
    this.obstacleSpawnTime = 4500
    this.humanSpawnTime = 3000
    this.gameTime = 15000
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
    this.zombieSpawnTime -= deltaTime
    this.obstacleSpawnTime -= deltaTime
    this.humanSpawnTime -= deltaTime
    if (this.zombieSpawnTime < 0) {
      this.entities.push(new Zombie(this.scrollSpeed * 2))
      this.zombieSpawnTime = 2000
    }
    if (this.obstacleSpawnTime < 0) {
      this.entities.push(new Obstacle())
      this.obstacleSpawnTime = 4500
    }
    if (this.humanSpawnTime < 0) {
      this.entities.push(new Human())
      this.humanSpawnTime = 3000
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

      if (entity.position.x < 100) {
        this.entities.splice(this.entities.indexOf(entity), 1)
      }
      if (entity instanceof Projectile && entity.position.x > width) {
        this.entities.splice(this.entities.indexOf(entity), 1)
      }
      if (entity instanceof Zombie && entity.position.x < 100) {
        this.sideBoard.rescuedLives.pop()
      }
      if (
        entity instanceof Human &&
        entity.position.x === this.tank.position.x
      ) {
        console.log('kör på kvinna ')
        this.entities.splice(this.entities.indexOf(entity), 1)
        this.sideBoard.addLives()
      }
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
