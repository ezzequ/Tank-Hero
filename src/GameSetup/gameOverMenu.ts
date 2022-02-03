class gameOverMenu {
  private playAgainButton: Button
  private logo: p5.Element
  private div: p5.Element
  private music: p5.SoundFile
  private finalZombie : p5.Element
  private finalScore : p5.Element

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
    this.finalZombie = createElement('h1', ``)
    this.finalZombie.parent(this.div)
    this.finalScore = createElement('h1', ``)
    this.finalScore.parent(this.div)
    
    this.div.position(0, 0)
    this.playAgainButton.btnRestart(this.div)
  }

  public setText(zombie : string, score : string) {
    this.finalZombie.html(`You killed ${zombie} zombies`)
    this.finalScore.html(`You got total ${score} points`)
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
