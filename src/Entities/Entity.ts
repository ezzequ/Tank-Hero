abstract class Entity {
  protected size: number
  protected health: number
  public position: p5.Vector
  protected image: p5.Image
  // private sound: p5.SoundFile;
  public points: number
  protected damage: number
  public isHit: boolean
  protected velocity: p5.Vector
  protected hitBoxPosition: p5.Vector;
  protected hitBoxSize: p5.Vector;

  constructor(
    size: number,
    health: number,
    position: p5.Vector,
    img: p5.Image,
    points: number,
    damage: number,
    ishit: boolean,
    velocity?: p5.Vector
  ) {
    this.size = size
    this.health = health
    this.position = position
    this.image = img
    // this.sound = sound;
    this.points = points
    this.damage = damage
    this.isHit = ishit
    this.velocity = velocity || createVector(-5, 0)
    this.hitBoxPosition = createVector(size * .1, size * .2);
    this.hitBoxSize = createVector(size * .8, size * .7);
  }

  public getSize() {
    return (this.hitBoxSize.x + this.hitBoxSize.y) / 2;
  }

  public removeHealth(entity: Entity, list: Entity[]) {
    if (entity.health == 1) {
      list.splice(list.indexOf(entity), 1)
    } else {
      entity.health -= 1
    }
  }

  //   private removeEntity() {}

  public update() {
    // this.position.x += this.velocity.x; //* deltaTime / 1000
    // this.position.y += this.velocity.y; //* deltaTime / 1000
    this.position.add(this.velocity)
  }
  public draw() {
    push();
    rectMode(CORNER);
    imageMode(CORNER)
    image(this.image, this.position.x, this.position.y, this.size, this.size)
    pop();
    this.drawHitBox();
  }

  public getHitBox() {
    const vector = createVector(this.position.x + this.hitBoxPosition.x, this.position.y + this.hitBoxPosition.y);
    return vector
  }


  private drawHitBox() {
    push();
    rectMode(CORNER);
    stroke('red');
    noFill();
    const x = this.position.x + this.hitBoxPosition.x;
    const y = this.position.y + this.hitBoxPosition.y;
    const width = this.hitBoxSize.x;
    const height = this.hitBoxSize.y;
    rect(x, y, width, height)
    pop();
  }
}
