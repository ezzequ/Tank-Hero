abstract class Entity {
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
    velocity?: p5.Vector
  ) {
    this.sound = sound
    this.size = size
    this.health = health
    this.position = position
    this.image = img
    this.points = points
    this.damage = damage
    this.isHit = ishit
    this.velocity = velocity || createVector(-5, 0)
    this.hitBoxPosition = createVector(size * 0.1, size * 0.2)
    this.hitBoxSize = createVector(size * 0.8, size * 0.7)
  }

  public getSize() {
    return (this.hitBoxSize.x + this.hitBoxSize.y) / 2
  }

  public removeHealth(entity: Entity, list: Entity[]) {
    if (entity.health == 1) {
      entity.isHit = true
      entity.image = images.zombies.zom2
      //list.splice(list.indexOf(entity), 1)
    } else {
      entity.health -= 1
    }
  }

  public getHealth() {
    return this.health
  }

  public hitDamage(entity: Entity) {
    if (entity instanceof Obstacle) {
      entity.image = images.obstacles.obs2
    }
    if (entity instanceof Zombie) {
      entity.image = images.zombies.zom2
      entity.velocity = createVector(-2, 0)
    }
    if (entity instanceof Boss) {
      entity.image = images.zombies.zom2
      entity.size = height * .1
      entity.position.x += height * .1
      entity.position.y += height * .1
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

  //   private removeEntity() {}

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
    // this.drawHitBox()
  }

  public getHitBox() {
    return {
      x: this.position.x + this.hitBoxPosition.x,
      y: this.position.y + this.hitBoxPosition.y,
      width: this.hitBoxSize.x,
      height: this.hitBoxSize.y,
    }
  }

  // private drawHitBox() {
  //   push()
  //   rectMode(CORNER)
  //   stroke('red')
  //   noFill()
  //   const x = this.position.x + this.hitBoxPosition.x
  //   const y = this.position.y + this.hitBoxPosition.y
  //   const width = this.hitBoxSize.x
  //   const height = this.hitBoxSize.y
  //   rect(x, y, width, height)
  //   pop()
  // }
}
