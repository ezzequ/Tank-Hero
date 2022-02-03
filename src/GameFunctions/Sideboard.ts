class SideBoard {
  private human: p5.Image
  public rescuedHumans: p5.Image[]
  private humanSize: number
  private sideBoardHeight: number
  //private startingLives: number

  constructor() {
    this.human = images.humans.human1
    this.rescuedHumans = [this.human, this.human, this.human, this.human]
    this.humanSize = 100
    this.sideBoardHeight = height / 6
  }


  public renderHumans() {
    let addNumber: number = 0
    let yNumber: number = 50
    for (let live of this.rescuedHumans) {
      addNumber += 100
      yNumber
      if (this.sideBoardHeight + addNumber > this.sideBoardHeight * 6 - 100) {
        addNumber = 0
        yNumber += 50
      }
      image(
        live,
        yNumber,
        this.sideBoardHeight + addNumber,
        this.humanSize,
        this.humanSize
      )
    }
  }

  public addLives() {
    this.rescuedHumans.push(this.human)
    sounds.saved.play()
  }

  public draw() {
    fill(1, 1, 1, 50)
    rect(0, 0, windowWidth / 6, windowHeight)
    this.renderHumans()
  }
}
