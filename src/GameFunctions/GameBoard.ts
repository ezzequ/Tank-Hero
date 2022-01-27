class GameBoard {
  private game: IGame
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
  private lastSpawnY?: number
  //private gameTime: number

  constructor(game: IGame) {
    this.game = game
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
    this.bossSpawnTime = 20000
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
      this.lastSpawnY = this.getRandomY()
      this.entities.push(new Boss(this.scrollSpeed * 0.2, this.lastSpawnY))
      this.bossSpawnTime = 20000
    }
    if (this.zombieSpawnTime < 0) {
      this.lastSpawnY = this.getRandomY()
      this.entities.push(new Zombie(this.scrollSpeed * 0.2, this.lastSpawnY))
      this.zombieSpawnTime = random(2000, 3000)
    }
    if (this.obstacleSpawnTime < 0) {
      this.lastSpawnY = this.getRandomY()
      this.entities.push(new Obstacle(this.lastSpawnY))
      this.obstacleSpawnTime = 4500
    }
    if (this.humanSpawnTime < 0) {
      this.lastSpawnY = this.getRandomY()
      this.entities.push(new Human(this.lastSpawnY))
      this.humanSpawnTime = 8000
    }
  }

  private getRandomY(): number {
    const cityHeight = height * 0.3
    const y = ((height - cityHeight) / 6) * floor(random(6)) + cityHeight
    if (y === this.lastSpawnY) {
      return this.getRandomY();
    }
    return y;
  }

  private hitEntity(entity: Entity) {
    const hitBox = entity.getHitBox()
    const tankHitBox = this.tank.getHitBox()
    if(entity instanceof Boss && hitBox.x < tankHitBox.x + tankHitBox.width &&
      hitBox.x + hitBox.width > tankHitBox.x &&
      hitBox.y < tankHitBox.y + tankHitBox.height &&
      hitBox.y + hitBox.height > tankHitBox.y) {
      // this.gameCounter.decreaseTankHealth()
      // if (!this.gameCounter.getLives()) {
      //   this.game.gameOver()
      // }
      // GÖ NÅGOT HÄR INNE NÄR MAN KÖR PÅ BOSS
    }
    if (
      entity instanceof Obstacle ||
      entity instanceof Zombie ||
      entity instanceof Human
    ) {
      if (
        hitBox.x < tankHitBox.x + tankHitBox.width &&
        hitBox.x + hitBox.width > tankHitBox.x &&
        hitBox.y < tankHitBox.y + tankHitBox.height &&
        hitBox.y + hitBox.height > tankHitBox.y && !entity.isHit
      ) {
        if (entity instanceof Obstacle) {
          this.gameCounter.decreaseTankHealth()
          entity.hitDamage(entity)
          sound.crash.play()
          if (!this.gameCounter.getLives()) {
            this.game.gameOver()
          }
        }
        if (entity instanceof Zombie) {
          this.gameCounter.decreaseTankHealth()
          this.gameCounter.countKilledZombies(entity)
          this.gameCounter.pointPerEntity(entity.points)
          entity.hitDamage(entity)
          sound.crash.play()
          if (!this.gameCounter.getLives()) {
            this.game.gameOver()
          }
          //this.entities.splice(this.entities.indexOf(entity), 1)
        }
        if (entity instanceof Human) {
          this.sideBoard.addLives()
          this.entities.splice(this.entities.indexOf(entity), 1)
        }
      }
    }

    if (entity instanceof Projectile) {
      for (const entityPlus of this.entities) {
        if (
          entityPlus instanceof Zombie ||
          entityPlus instanceof Human ||
          entityPlus instanceof Boss
        ) {
          const hitBox = entity.getHitBox()
          const entityHitBox = entityPlus.getHitBox()
          if (
            hitBox.x < entityHitBox.x + entityHitBox.width &&
            hitBox.x + hitBox.width > entityHitBox.x &&
            hitBox.y < entityHitBox.y + entityHitBox.height &&
            hitBox.y + hitBox.height > entityHitBox.y && !entityPlus.isHit
          ) {
            if (entityPlus instanceof Zombie && entityPlus.getHealth() == 1) {
                entityPlus.hitDamage(entityPlus)
                this.gameCounter.pointPerEntity(entityPlus.points)
                this.gameCounter.countKilledZombies(entityPlus)
                sound.hit.play();
                
            }
            if (entityPlus instanceof Human) {
              this.gameCounter.removePoint(entityPlus.points)
            }
            if(entityPlus instanceof Boss && entityPlus.getHealth() == 1) {
              entityPlus.hitDamage(entityPlus)
            }
            entity.removeHealth(entityPlus, this.entities)
            this.entities.splice(this.entities.indexOf(entity), 1)
          }
        }
      }
    }
  }

  private entityEndOfLine(entity: Entity) {
    if (entity.position.x < width / 6) {
      if (entity instanceof Zombie && !entity.isHit) {
        this.gameCounter.removePoint(entity.points * 10)
        this.sideBoard.rescuedLives.pop()
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
      this.hitEntity(entity)
    }
    this.gameCounter.update()
    //this.pauseMenu()
  }

  public draw() {
    this.scroll()
    this.sideBoard.draw()
    this.gameCounter.draw()

    for (const entity of this.entities) {
      entity.draw()
    }
    this.tank.draw()
    this.gameCounter.drawHearts(this.tank)
  }
}
