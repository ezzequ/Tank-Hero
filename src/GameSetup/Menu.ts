class Menu {

  private startButton: Button
  //private soundButton: Button
  private logo: p5.Element
  // private button: p5.Element
  private div1: p5.Element
  private div2: p5.Element
  private controlsImg: p5.Element

  constructor() {
    // this.music = sound.menuMusic
    this.logo = createImg('/assets/images/logoTransp.png', 'test')
    this.logo.addClass('logo')
    this.div1 = createDiv()
    this.div1.addClass('start-menu')
    this.logo.parent(this.div1)
    this.startButton = new Button(
      createButton('START GAME').parent(this.div1))
    this.startButton.closeMenu(this.div1)
    this.div1.position(0, 0)

    this.div2 = createDiv()
    this.div2.parent(this.div1)
    this.div2.addClass('controls')
    this.controlsImg = createImg('/assets/images/controls3.png', 'test')
    this.controlsImg.parent(this.div2)
    this.controlsImg.addClass('control-img')
    }

  public showMenu() {
    this.div1.style('display: flex;')
  }
  public closeMenu() {
    this.div1.hide()
  }
}

