class Game implements IGame {
  private gameBoard: GameBoard
  private menu: Menu
  public isRunning: boolean
  private pauseTime: number

  constructor() {
    this.gameBoard = new GameBoard(this)
    this.menu = new Menu()
    this.isRunning = false
    this.pauseTime = 250
  }

  public startGame(): void {
    this.menu.closeMenu()
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
  private pauseMenu() {
    this.pauseTime -= deltaTime
    if(keyIsDown(27)) {
      if(this.pauseTime < 0) {
        if(this.isRunning) {
          this.gameOver()
        }else {
          this.startGame()
        }
        this.pauseTime = 250
      }
    }
  }

  public update() {
    if (this.isRunning) {
      this.gameBoard.update()
    }
    this.pauseMenu()
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
  isRunning: boolean;
  startGame(): void
  gameOver(): void
}
