class Tank extends Entity {
  constructor() {
    const size = 100;
    const health = 4;
    const position = createVector(width * 0.2, height * 0.5);
    const img = images.tank;
    // const sound: p5.SoundFile = 2
    const points = 0;
    const damage = 0;
    const ishit = false;
    const velocity: p5.Vector = createVector(0, 0);

    super(size, health, position, img, points, damage, ishit, velocity);
  }
  // private shoot() {
  // }

  public update() {}

  private move() {

    //Röra tanken i X-led framåt
    if (this.position.x > width * .2) {
      if (keyIsDown(37)) {
        this.position.x -= 10;
      }
    } else {
      this.position.x = width * .2
    }
    //Röra tanken i X-led bakåt
    if (this.position.x < width - 100) {
      if (keyIsDown(39)) {
        this.position.x += 5;
      }
    } else {
      this.position.x = width - 100;
    }

    //Röra tanken i Y-led nedåt
    if (this.position.y < height - 100) {
      if (keyIsDown(40)) {
        this.position.y += 5;
      }
    }else {
      this.position.y = height - 100
    }
    //Röra tanken i Y-led uppåt
    if (this.position.y > height / 6) {
      if (keyIsDown(38)) {
        this.position.y -= 5;   
      }
    }else {
      this.position.y = height / 6;
    }
  }
}
