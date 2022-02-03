class gameOverMenu {
  private playAgainButton: Button
  //private highScore: Button
  private logo: p5.Element
  private div: p5.Element
  private music: p5.SoundFile

  constructor() {
    this.music = sounds.menuMusic
    this.logo = createImg('/assets/images/newgameover.png', 'test')
    this.logo.addClass('logo')
    this.div = createDiv()
    this.div.addClass('game-over-menu')
    this.logo.parent(this.div)
    this.playAgainButton = new Button(
      createButton('PLAY AGAIN').parent(this.div)
    )
    //this.highScore = new Button(createButton('HIGHSCORE').parent(this.div))
    this.div.position(0, 0)
    this.playAgainButton.btnRestart(this.div)
  }

  public showMenu() {
    this.div.style('display: flex;')
    sounds.gameMusic.stop()
    this.music.play()
  }
  public closeMenu() {
    sounds.gameMusic.play()
    this.music.stop()
    this.div.style('display: none;')
  }
}
