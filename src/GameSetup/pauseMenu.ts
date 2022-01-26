class PauseMenu {

  private continueButton: Button
  private restartButton: Button
  private soundButton: Button
  private logo: p5.Element
  // private button: p5.Element
  private div: p5.Element
  private music: p5.SoundFile

  constructor() {
    this.music = sound.menuMusic
    this.logo = createImg('/assets/images/logoTransp.png', 'test')
    this.div = createDiv()
    this.div.addClass('pause-menu')
    this.logo.parent(this.div)
    this.continueButton = new Button(
      createButton('CONTINUE').parent(this.div),
      1,
      2,
      'white'
    )
    this.soundButton = new Button(
      createButton('TOGGLE SOUND').parent(this.div),
      1,
      2,
      'white'
    )
    this.restartButton = new Button(
      createButton('RESTART').parent(this.div),
      1,
      2,
      'white'
    )

    this.continueButton.closeMenu(this.div)
    this.div.position(0, 0)
  }

  public showMenu() {
    this.div.style('display: flex;')

    // this.music.play();
  }
  public closeMenu() {
    this.div.style('display: none;')
  }
}
