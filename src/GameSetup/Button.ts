class Button {
  private button: p5.Element
  private position: number
  private size: number
  private color: string

  constructor(
    button: p5.Element,
    position: number,
    size: number,
    color: string
  ) {
    this.button = button
    this.position = position
    this.size = size
    this.color = color
    this.button.style('font-size: ' + size + 'rem;')
    this.button.style('color: ' + color + ';')
    this.button.style('border: none;')
    this.button.style('background-color: transparent;')
    this.button.style('cursor: pointer;')
  }

  public closeMenu(div: p5.Element) {
    this.button.mouseClicked((click) => {
      div.style('display: none;')
      game.startGame()
    })
  }

  public update() {
    this.button.position(width / 2, height / 4)
  }
}
