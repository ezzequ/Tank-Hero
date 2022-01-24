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
  private bossSpawnTime: number
  //private gameTime: number

  constructor() {
    this.gameCounter = new GameCounter()
    this.sideBoard = new SideBoard()
    this.tank = new Tank()
    this.entities = []

    this.background = images.bgImg
    this.xPos = 0
    this.xPos2 = width
    this.scrollSpeed = 2
    this.zombieSpawnTime = random(1500, 2500)
    this.obstacleSpawnTime = 4500
    this.humanSpawnTime = 13000
    this.bossSpawnTime = 6000
    //this.gameTime = 15000
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
    this.bossSpawnTime -= deltaTime

    if (this.bossSpawnTime < 0) {
      this.entities.push(new Boss(this.scrollSpeed * 0.2))
      this.bossSpawnTime = 6000
    }

    if (this.zombieSpawnTime < 0) {
      this.entities.push(new Zombie(this.scrollSpeed * 0.2))
      this.zombieSpawnTime = random(1500, 2500)
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

  private hitEntity(entity: Entity) {
    if (entity instanceof Obstacle || entity instanceof Zombie) {
      let distance = dist(
        this.tank.position.x,
        this.tank.position.y,
        entity.position.x,
        entity.position.y
      )
      if(distance < 80) {
        // Toalett papper
        if (entity instanceof Obstacle ) {
          if(entity.isHit === false) {
            this.entities.splice(this.entities.indexOf(entity), 1)
            this.gameCounter.decreaseTankHealth()
          }
        }
        if(entity instanceof Zombie) {
          this.entities.splice(this.entities.indexOf(entity), 1)
          this.gameCounter.countKilledZombies(entity)
          this.gameCounter.pointPerEntity(entity.points)
        }  
      }
    }

    if (entity instanceof Projectile) { // skott
      for (const entityPlus of this.entities) {
        if (entityPlus instanceof Zombie || entityPlus instanceof Human || entityPlus instanceof Boss) {
          let distance = dist(
            entity.position.x,
            entity.position.y,
            entityPlus.position.x,
            entityPlus.position.y
          )
          const sizeSum = entity.getSize() / 2 + entityPlus.getSize() / 2;
          if (distance < sizeSum) {
            console.log(entityPlus)
            if (entityPlus instanceof Zombie) {
              this.gameCounter.countKilledZombies(entityPlus)
              this.gameCounter.pointPerEntity(entityPlus.points)
            }
            if (entityPlus instanceof Human) {
              this.gameCounter.removePoint(entityPlus.points)
            }
            //this.entities.splice(this.entities.indexOf(entityPlus), 1)
            entity.removeHealth(entityPlus, this.entities)
            console.log(`${entity} träffade ${entityPlus}`)
            this.entities.splice(this.entities.indexOf(entity), 1)
          }
        }
      }
    }
  }

  private killSurviour(entity: Entity) {
    if (entity instanceof Zombie && entity.position.x < width / 6) {
      this.sideBoard.rescuedLives.pop()
    }
  }
  private saveSurvivor(entity: Entity) {
    let distance = dist(
      entity.position.x,
      entity.position.y,
      this.tank.position.x,
      this.tank.position.y
    )
    if (entity instanceof Human && distance < 80) {
      this.entities.splice(this.entities.indexOf(entity), 1)
      this.sideBoard.addLives()
    }
  }

  private entityEndOfLine(entity: Entity) {
    if (entity.position.x < width / 6) {
      if (entity instanceof Zombie) {
        this.gameCounter.removePoint(entity.points * 10)
      }
      this.entities.splice(this.entities.indexOf(entity), 1)
    }
    if (entity instanceof Projectile && entity.position.x > width) {
      this.entities.splice(this.entities.indexOf(entity), 1)
    }
  }

  public update() {
    this.spawnEntity()
    const newProjectile = this.tank.update()
    if (newProjectile) {
      this.entities.push(newProjectile)
    }
    for (const entity of this.entities) {
      entity.update()
      this.entityEndOfLine(entity)
      this.killSurviour(entity)
      this.saveSurvivor(entity)
      this.hitEntity(entity)
    }
    this.gameCounter.update()
  }

  public draw() {
    this.scroll()
    this.sideBoard.draw()
    this.gameCounter.draw()

    for (const entity of this.entities) {
      entity.draw()
    }
    this.tank.draw()
  }
}
