class Game implements IGame {
  private gameBoard: GameBoard
  private menu: Menu
  private pauseMenu: PauseMenu
  public isRunning: boolean
  private isPausePressed: boolean
  private gameOverMenu: gameOverMenu
  private gameCounter: GameCounter
  public isMusic: boolean

  constructor() {
    this.gameCounter = new GameCounter()
    this.gameBoard = new GameBoard(this)
    this.menu = new Menu()
    this.pauseMenu = new PauseMenu()
    this.gameOverMenu = new gameOverMenu()
    this.isRunning = false
    this.isPausePressed = false
    this.isMusic = true
  }

  public getScore() {
    return {
      score: this.gameCounter.gameTimeScore,
      zombieKilled: this.gameCounter.killedZombies.length,
      timeLeft: this.gameCounter.killedZombies,
    }
  }

  public startGame(): void {
    this.menu.closeMenu()
    this.isRunning = true
  }

  public restartGame() {
    this.gameBoard = new GameBoard(this)
    this.gameCounter = new GameCounter()
    this.isRunning = true
  }

  public gameOver(): void {
    this.gameOverMenu.showMenu()
    this.isRunning = false
  }

  private pauseGame() {
    const pressed = keyIsDown(27) && !this.isPausePressed
    // const released = !keyIsDown(27) && this.isPausePressed;

    if (pressed) {
      if (this.isRunning) {
        this.pauseMenu.showMenu()
        this.isRunning = false
        sounds.gameMusic.stop()
      } else {
        this.isRunning = true
        this.pauseMenu.closeMenu()
      }
    }
    this.isPausePressed = keyIsDown(27)
  }

  public update() {
    if (this.isRunning) {
      //this.gameCounter.countDownTimer()
      this.gameBoard.update()
    }
    this.pauseGame()
    // if(this.gameCounter.countDownTimer()) {
    //   this.gameOver()
    // }
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
  isRunning: boolean
  isMusic: boolean
  startGame(): void
  gameOver(): void
  restartGame(): void
  getScore(): object
}
