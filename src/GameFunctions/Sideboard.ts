class SideBoard {
  private human: p5.Image
  private rescuedLives: p5.Image[]
  private humanSize: number
  private sideBoardHeight: number
  private startingLives: number

  constructor() {
    this.human = images.human
    this.rescuedLives = [this.human, this.human, this.human, this.human]
    this.humanSize = 100
    this.sideBoardHeight = height / 6
    this.startingLives = 4
  }

  /*private rescuedLives() {
    let rescuedLives = [1,3,4,5]
    //let rescuedLive: Array<number> = [1,3,4,5]
    
  }*/

  public renderLives() {
    let addNumber: number = 0
    for (let live of this.rescuedLives) {
      addNumber += 100
      image(
        live,
        50,
        this.sideBoardHeight + addNumber,
        this.humanSize,
        this.humanSize
      )
    }
  }

  public addLives() {
    console.log('test')
    console.log(this.rescuedLives.push(this.human))
  }

  private deathEffect() {
    // Return Void
  }

  public update() {
    // Return Void
  }

  public draw() {
    fill(204, 102, 0)
    rect(0, 0, windowWidth / 6, windowHeight)
    this.renderLives()
  }
}
