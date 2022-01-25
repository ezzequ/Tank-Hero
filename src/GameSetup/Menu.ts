class Menu {
  // private gameControls: p5.Image;
  // private game: IGame
  // private isActive : boolean = true;
  // private logo: p5.Image;
  // private gameDescription : string = "";
  private startButton: Button
  private soundButton: Button
  private logo: p5.Element
  // private button: p5.Element
  private div: p5.Element

  constructor() {
    this.logo = createImg('/assets/images/logoTransp.png', 'test')
    this.logo.size(600, 600)
    this.logo.style('display: block;')
    this.logo.style('margin: 0 auto;')
    this.div = createDiv()
    this.logo.parent(this.div)
    this.div.style(
      'background-image: linear-gradient( #6A6D54 20%, black 40% 100%);'
    )
    this.div.style('display: flex;')
    this.div.style('flex-direction: column;')
    this.div.style('flex-basis: auto;')
    this.div.style(`width: ${width}px`)
    this.div.style('padding-bottom: 1rem;')
    this.div.style('gap: 1rem;')
    this.div.style(`height: ${height}px`)
    this.startButton = new Button(
      createButton('START GAME').parent(this.div),
      1,
      2,
      'white'
    )
    // this.soundButton = new Button(
    //   createButton('TOGGLE SOUND').parent(this.div),
    //   1,
    //   2,
    //   'white'
    // )
    this.startButton.closeMenu(this.div)

    // this.button = this.startButton
    // this.div.child(this.button)

    this.div.position(0, 0)
  }

  public showMenu() {
    this.div.show()
  }
}
