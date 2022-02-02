abstract class Entity {
  private animateTime: number
  protected size: number
  protected health: number
  public position: p5.Vector
  protected image: p5.Image
  public sound: p5.SoundFile
  public points: number
  protected damage: number
  public isHit: boolean
  protected velocity: p5.Vector
  protected hitBoxPosition: p5.Vector
  protected hitBoxSize: p5.Vector

  constructor(
    size: number,
    health: number,
    position: p5.Vector,
    img: p5.Image,
    points: number,
    damage: number,
    ishit: boolean,
    sound: p5.SoundFile,
    hitBoxSize: p5.Vector,
    hitBoxPosition: p5.Vector,
    velocity?: p5.Vector
  ) {
    this.animateTime = 0
    this.sound = sound
    this.size = size
    this.health = health
    this.position = position
    this.image = img
    this.points = points
    this.damage = damage
    this.isHit = ishit
    this.velocity = velocity || createVector(-5, 0)
    this.hitBoxPosition = hitBoxPosition
    this.hitBoxSize = hitBoxSize
  }

  public getSize() {
    return (this.hitBoxSize.x + this.hitBoxSize.y) / 2
  }

  public removeHealth(entity: Entity, list: Entity[]) {
    if (entity.health == 1) {
      entity.isHit = true
      entity.image = images.splatter
      //list.splice(list.indexOf(entity), 1)
    } else {
      entity.health -= 1
    }
  }

  public getHealth() {
    return this.health
  }

  public hitDamage(entity: Entity) {
    if (entity instanceof Truck) {
      entity.image = images.obstacles.obs1destroyed
    }
    if (entity instanceof Zombie) {
      entity.image = images.splatter
      entity.velocity = createVector(-2, 0)
    }
    if (entity instanceof Boss) {
      entity.image = images.splatter
      entity.size = height * 0.1
      entity.position.x += height * 0.1
      entity.position.y += height * 0.1
      entity.velocity = createVector(-2, 0)
    }
    entity.isHit = true
  }

  public pickPowerUp(counter: GameCounter, entity: Entity) {
    if (entity instanceof FuelTank) {
      counter.fuelLimit += entity.points
    }
    if (entity instanceof Heart) {
      if (counter.hearts.length < 4) {
        counter.hearts.push(counter.heart)
      }
    }
  }

  public animateEntity(entity: Entity) {
    const zombies = Object.values(images.zombies)
    const humans = Object.values(images.humans)
    //console.log(this.animateTime)
    if (entity instanceof Zombie && !entity.isHit) {
      this.animateTime += deltaTime
      //console.log(`INDEX ${i}\nTID ${this.animateTime}`)
      if (250 < this.animateTime && 270 > this.animateTime) {
        entity.image = zombies[0]
      } else if (500 < this.animateTime && 520 > this.animateTime) {
        entity.image = zombies[1]
      } else if (750 < this.animateTime && 760 > this.animateTime) {
        entity.image = zombies[2]
      } else if (1000 < this.animateTime && 1020 > this.animateTime) {
        entity.image = zombies[3]
        this.animateTime = 0
      }
    }
    if (entity instanceof Human && !entity.isHit) {
      this.animateTime += deltaTime
      if (250 < this.animateTime && 270 > this.animateTime) {
        entity.image = humans[0]
      } else if (500 < this.animateTime && 520 > this.animateTime) {
        entity.image = humans[1]
        this.animateTime = 0
      }
    }
  }

  public update() {
    // this.position.x += this.velocity.x; //* deltaTime / 1000
    // this.position.y += this.velocity.y; //* deltaTime / 1000
    this.position.add(this.velocity)
  }
  public draw() {
    push()
    rectMode(CORNER)
    imageMode(CORNER)
    image(this.image, this.position.x, this.position.y, this.size, this.size)
    pop()
    this.drawHitBox()
  }

  public getHitBox() {
    return {
      x: this.position.x + this.hitBoxPosition.x,
      y: this.position.y + this.hitBoxPosition.y,
      width: this.hitBoxSize.x,
      height: this.hitBoxSize.y,
    }
  }

  private drawHitBox() {
    push()
    rectMode(CORNER)
    stroke('red')
    noFill()
    const x = this.position.x + this.hitBoxPosition.x
    const y = this.position.y + this.hitBoxPosition.y
    const width = this.hitBoxSize.x
    const height = this.hitBoxSize.y
    rect(x, y, width, height)
    pop()
  }
}
