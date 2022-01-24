class Boss extends Entity {
  private hitBoxPosition: p5.Vector;
  private hitBoxSize: p5.Vector;

  constructor(velo: number) {
    const size = 300
    const health = 5
    const cityHeight = 260
    const y = ((height-400 - cityHeight) / 6) * ceil(random(6)) + cityHeight
    const position = createVector(width, y)
    const img = images.boss
    // const sound: p5.SoundFile = 2
    const points = 500
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-velo - 2, 0)
    super(size, health, position, img, points, damage, ishit, velocity)

    this.hitBoxPosition = createVector(size * .1, size * .2);
    this.hitBoxSize = createVector(size * .8, size * .7);
  }

  public draw() {
    super.draw();
    this.drawHitBox();
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
