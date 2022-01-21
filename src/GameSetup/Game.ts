class Game {
  private gameBoard: GameBoard
  //   private startMenu: StartMenu

  constructor() {
    this.gameBoard = new GameBoard()
    // this.startMenu = new StartMenu()
  }

  //private drawStartMenu() {
  // Return Void;
  //}

  //private checkMenu() {
  // Return Void;
  //}

  public update() {
    this.gameBoard.update()
  }

  public draw() {
    // background('blue')
    this.gameBoard.draw()
  }

  // private playMusic() {
  //   // Return Void;
  // }
}

interface IGame {
  //public startGame() {
  //}
}
