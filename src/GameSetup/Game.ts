class Game implements IGame {
  private gameBoard: GameBoard
  public menu: Menu
  private pauseMenu: PauseMenu
  public isRunning: boolean
  private isPausePressed: boolean
  private gameOverMenu: gameOverMenu
  public gameCounter: GameCounter
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

  public restartGame() {
    this.gameBoard = new GameBoard(this)
    this.gameCounter = new GameCounter()
    this.isRunning = true
  }

  public gameOver(): void {
    this.gameOverMenu.showMenu()
    sounds.gameOverSound.play()
    this.isRunning = false
    let zombie = getItem('totalKilledZombies')
    let score = getItem('totalPoints')
    console.log(zombie)
    this.gameOverMenu.setText(`${zombie}`, `${score}`)
  }

  private pauseGame() {
    const pressed = keyIsDown(27) && !this.isPausePressed && this.isRunning

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
      this.gameBoard.update()
    }
    this.pauseGame()
    
  }

  public draw() {
    this.gameBoard.draw()
  }
}

interface IGame {
  isRunning: boolean
  isMusic: boolean
  gameOver(): void
  restartGame(): void
  getScore(): object
}
