class Button {
  private button: p5.Element

  constructor(button: p5.Element) {
    this.button = button
    this.button.addClass('btn')
  }

  public resumeGame(div: p5.Element) {
    this.button.mouseClicked((click) => {
      div.style('display: none;')
      game.isRunning = true
      sounds.menuMusic.stop()
      //sounds.readyGo.play()
      if (game.isMusic) {
        sounds.gameMusic.play(0, 1, 0.5)
      }
    })
  }

  public startGame(div: p5.Element) {
    this.button.mouseClicked(() => {
      div.style('display: none;')
      game.isRunning = true
      sounds.menuMusic.stop()
      sounds.readyGo.play()
      sounds.gameMusic.loop(2, 1, 0.5)
    })
  }

  public btnRestart(div: p5.Element) {
    this.button.mouseClicked(() => {
      div.style('display: none;')
      game.restartGame()
      sounds.menuMusic.stop()
      sounds.readyGo.play()
    })
  }

  public btnHighScore(div: p5.Element) {
    this.button.mouseClicked(() => {
      div.style('display: none;')
    })
  }

  public highScore(div: p5.Element) {
    this.button.mouseClicked(() => {
      div.style('display: none;')
      sounds.menuMusic.stop()
      sounds.readyGo.play()
    })
  }

  public toggleSound() {
    this.button.mouseClicked(() => {
      // const soundz = Object.values(sounds) as p5.SoundFile[]
      if (game.isMusic) {
        this.button.html('SOUND ON')
        outputVolume(0)
        game.isMusic = false
      } else if (!game.isMusic) {
        this.button.html('SOUND OFF')
        outputVolume(0.5)
        game.isMusic = true
      }
    })
  }
}
