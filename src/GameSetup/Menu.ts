class Menu {
  // private gameControls: p5.Image;
  // private game : IGame;
  // private isActive : boolean = true;
  // private logo: p5.Image;
  // private gameDescription : string = "";
  private startButton: Button
  private soundButton: Button
  // private button: p5.Element
  private div: p5.Element

  constructor() {
    this.div = createDiv()
    this.div.style('background-color: blue;')
    this.div.style('display: flex;')
    this.div.style('flex-direction: column;')
    this.div.style('width: 300px;')
    this.div.style('padding: 1rem;')
    this.div.style('gap: 1rem;')
    this.div.style('height: auto;')
    this.startButton = new Button(
      createButton('START GAME').parent(this.div),
      1,
      2,
      '#6A6D54'
    )
    this.soundButton = new Button(
      createButton('TOGGLE SOUND').parent(this.div),
      1,
      2,
      '#6A6D54'
    )
    this.startButton.closeMenu(this.div)

    // this.button = this.startButton
    // this.div.child(this.button)
  }

  public update() {
    // Return Void;
  }

  public draw() {
    this.div.position(width / 5, height / 5)
    //this.startButton.draw()
  }
}
