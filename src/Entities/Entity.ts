abstract class Entity {
  private size: number;
  private health: number;
  public position: p5.Vector;
  private image: p5.Image; 
  // private sound: p5.SoundFile; 
  private points: number;
  private damage: number;
  private isHit: boolean;
  private velocity: p5.Vector;

  constructor(size : number, health : number, position : p5.Vector, img : p5.Image, points : number, damage : number, ishit : boolean, velocity?: p5.Vector) {
    this.size = size;
    this.health = health;
    this.position = position;
    this.image = img;
    // this.sound = sound;
    this.points = points;
    this.damage = damage;
    this.isHit = ishit;
    this.velocity = velocity || createVector(-5, 0)
  }
  
  //   private removeHealth() {}

  //   private removeEntity() {}

  public update() {
    // this.position.x += this.velocity.x; //* deltaTime / 1000
    // this.position.y += this.velocity.y; //* deltaTime / 1000
    this.position.add(this.velocity);
    

  }
  public draw() {
    image(this.image, this.position.x, this.position.y, this.size, this.size)
  
  }
}
