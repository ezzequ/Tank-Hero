class GameBoard {
  //   private background: object = {}
  // private gameCounter : GameCounter
  // private entities: Entity[];
  // private tank : Tank;
  private sideBoard: SideBoard

  constructor() {
    this.sideBoard = new SideBoard()
  }

  //   private scroll() {}

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
    this.sideBoard.draw()
  }
}
