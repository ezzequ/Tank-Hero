class GameBoard {
  private background: p5.Image;
  private xPos: number;
  private xPos2: number;

  private scrollSpeed : number;
  // private gameCounter : GameCounter
  // private entities: Entity[];
  private tank : Tank;
  private zombie : Zombie;
  private obstacle : Obstacle;
  private human : Human;

  private sideBoard: SideBoard

  constructor() {
    this.sideBoard = new SideBoard();
    this.tank = new Tank();
    this.zombie = new Zombie();
    this.obstacle = new Obstacle();
    this.human = new Human();

    this.background = images.bgImg;
    this.xPos = 0;
    this.xPos2 = width; 
    this.scrollSpeed = 5;
  
  }

  private scroll() {
    image(this.background, this.xPos, 0, width, height)
    image(this.background, this.xPos2, 0, width, height)
  
    this.xPos -= this.scrollSpeed;
    this.xPos2 -= this.scrollSpeed;
    
    if (this.xPos < -width){
      this.xPos = width;
    }
    if (this.xPos2 < -width){
      this.xPos2 = width;
    }
    
  }

  //   private spawnEntities() {}

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
    this.tank.move()
  }
  
  public draw() {    
    this.scroll();
    // this.sideBoard.draw()
    // image(this.tankImage, 0, 300, 200, 200)
    this.tank.draw();
    this.zombie.draw();
    this.obstacle.draw();
    this.human.draw();
  }
}
