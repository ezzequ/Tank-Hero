class Game implements IGame {
  private gameBoard: GameBoard
  private menu: Menu
  private isRunning: boolean

  constructor() {
    this.gameBoard = new GameBoard(this)
    this.menu = new Menu()
    this.isRunning = false
  }

  public startGame(): void {
    // this.menu.showMenu()
    this.isRunning = true
  }

  public gameOver(): void {
    this.menu.showMenu()
    this.isRunning = false
  }

  //private drawStartMenu() {
  // Return Void;
  //}

  //private checkMenu() {
  // Return Void;
  //}

  public update() {
    if (this.isRunning) {
      this.gameBoard.update()
    }
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
  startGame(): void
  gameOver(): void
}
