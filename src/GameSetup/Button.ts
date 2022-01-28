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
      sounds.menuMusic.stop();
      sounds.readyGo.play();
      sounds.gameMusic.play(2,1,0.5);
      
    })
  }

  public btnRestart(div : p5.Element) {
    this.button.mouseClicked((click) => {
      div.style('display: none;')
      game.restartGame()
      sounds.menuMusic.stop();
      sounds.readyGo.play();

    })
  }
}
