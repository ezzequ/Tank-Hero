class Game implements IGame {
  private gameBoard: GameBoard
  private menu: Menu
  private pauseMenu : PauseMenu
  public isRunning: boolean
  private pauseTime: number
  private gameOverMenu : gameOverMenu

  constructor() {
    this.gameBoard = new GameBoard(this)
    this.menu = new Menu()
    this.pauseMenu = new PauseMenu()
    this.gameOverMenu = new gameOverMenu()
    this.isRunning = false
    this.pauseTime = 250
  }


  public startGame(): void {
    this.menu.closeMenu()
    this.isRunning = true
  }

  public gameOver(): void {
    this.gameOverMenu.showMenu()
    this.isRunning = false
  }

  private pauseGame() {
    this.pauseTime -= deltaTime
    if(keyIsDown(27)) {
      if(this.pauseTime < 0) {
        if(this.isRunning) {
          this.pauseMenu.showMenu()
          this.isRunning = false
        }else {
          this.isRunning = true;
          this.pauseMenu.closeMenu()
        }
        this.pauseTime = 250
      }
    }
  }

  public update() {
    if (this.isRunning) {
      this.gameBoard.update()
    }
    this.pauseGame()
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
