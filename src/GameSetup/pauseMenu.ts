class PauseMenu {
  private continueButton: Button
  private restartButton: Button
  private soundButton: Button
  private logo: p5.Element
  // private button: p5.Element
  private div: p5.Element
  private music: p5.SoundFile
  //private score : p5.Element

  constructor() {
    this.music = sounds.menuMusic
    this.logo = createImg('/assets/images/newpause.png', 'test')
    this.logo.addClass('logo')
    this.div = createDiv()
    this.div.addClass('pause-menu')
    this.logo.parent(this.div)
    this.continueButton = new Button(createButton('CONTINUE').parent(this.div))
    this.soundButton = new Button(
      createButton('SOUND OFF').parent(this.div)
    )
    this.restartButton = new Button(createButton('RESTART').parent(this.div))
    // this.score = createElement('h5', "Score " + game.getScore().score)
    // this.score.parent(this.div)
    this.continueButton.resumeGame(this.div)
    this.restartButton.btnRestart(this.div)
    //this.soundButton.toggleSound()
    this.soundButton.toggleSound()
    this.div.position(0, 0)
  }

  public showMenu() {
    this.div.style('display: flex;')
    sounds.menuMusic.play()

    // this.music.play();
  }

  public closeMenu() {
    this.div.style('display: none;')
    sounds.menuMusic.stop()
  }
}
