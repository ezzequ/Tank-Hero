class Menu {

  private startButton: Button
  //private soundButton: Button
  private logo: p5.Element
  // private button: p5.Element
  private div: p5.Element
  private music: p5.SoundFile

  constructor() {
    this.music = sound.menuMusic
    this.logo = createImg('/assets/images/logoTransp.png', 'test')
    this.div = createDiv()
    this.div.addClass('start-menu')
    this.logo.parent(this.div)
    this.startButton = new Button(
      createButton('START GAME').parent(this.div))

    this.startButton.closeMenu(this.div)
    this.div.position(0, 0)
  }

  public showMenu() {
    this.div.style('display: flex;')

    // this.music.play();
  }
  public closeMenu() {
    this.div.hide()
  }
}
