class gameOverMenu {

    private playAgainButton: Button
    //private soundButton: Button
    private logo: p5.Element
    // private button: p5.Element
    private div: p5.Element
    private music: p5.SoundFile
  
    constructor() {
      this.music = sound.menuMusic
      this.logo = createImg('/assets/images/logoTransp.png', 'test')
      this.logo.addClass('logo')
      this.div = createDiv()
      this.div.addClass('game-over-menu')
      this.logo.parent(this.div)
      this.playAgainButton = new Button(
        createButton('PLAY AGAIN').parent(this.div))
  
      this.playAgainButton.closeMenu(this.div)
      this.div.position(0, 0)
      this.playAgainButton.btnRestart(this.div)
    }
  
    public showMenu() {
      this.div.style('display: flex;')
      sound.gameOverSound.play()
  
      // this.music.play();
    }
    public closeMenu() {
      this.div.style('display: none;')
    }
  }
  