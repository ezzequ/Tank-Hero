class Button {
  private button: p5.Element

  constructor(button: p5.Element) {
    this.button = button
    this.button.addClass('btn')   
  }

  public closeMenu(div: p5.Element) {
    this.button.mouseClicked((click) => {
      div.style('display: none;')
      game.isRunning = true
      sound.menuMusic.stop();
      sound.readyGo.play();
      
    })
  }

  public btnRestart(div : p5.Element) {
    this.button.mouseClicked((click) => {
      div.style('display: none;')
      game.restartGame()
      sound.gameOverMusic.stop();
      sound.readyGo.play();

    })
  }
}
