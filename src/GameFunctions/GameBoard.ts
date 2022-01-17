class GameBoard {
  private background: p5.Image;
  private background2: p5.Image;
  private tankImage: p5.Image;
  private xPos: number;
  private xPos2: number;

  private scrollSpeed : number;
  // private gameCounter : GameCounter
  // private entities: Entity[];
  private tank : Tank;
  private sideBoard: SideBoard

  constructor() {
    this.sideBoard = new SideBoard();
    this.tank = new Tank();

    this.background = loadImage('/assets/images/burning-test1.png');
    this.background2 = loadImage('/assets/images/burning-test2.png');
    this.tankImage = loadImage('/assets/images/tank.png');
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
  }
  
  public draw() {
    this.scroll();
    // this.sideBoard.draw()
    image(this.tankImage, 0, 300, 200, 200)
    this.tank.draw()
  }
}
