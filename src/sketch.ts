//---- GLOBAL VARIABLES ----//
let game: Game
let font: Font
let sounds: Sounds
let images: Images
/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  font = {
    gameFont: loadFont('/assets/fonts/Bicubik.ttf'),
  }

  sounds = {
    menuMusic: loadSound('/assets/music/menumusic1.mp3'),
    gameMusic: loadSound('/assets/music/gameMusic.mp3'),
    readyGo: loadSound('/assets/sounds/SFX/Ready-GO.wav'),
    crash: loadSound('/assets/sounds/SFX/crash.wav'),
    // gameOverSound: loadSound('/assets/sounds/SFX/game-over.mp3'),
    gameOverMusic: loadSound('/assets/music/menumusic1.mp3'),
    saved: loadSound('/assets/sounds/SFX/saved.mp3'),
    zombieEat: loadSound('/assets/sounds/zombie/zombie-eat.wav'),
    entityKilled: loadSound('/assets/sounds/zombie/zombieKilled.mp3'),
    fuelPickup: loadSound('/assets/sounds/SFX/fuelPickup.mp3'),
    heartPickup: loadSound('/assets/sounds/SFX/heartPickup.mp3'),
    shot: loadSound('/assets/sounds/tank/shot.wav')
    bossDeath: loadSound('/assets/sounds/zombie/bossDeath.wav')
  }
  images = {
    bgImg: loadImage('/assets/images/burning.png'),
    tank: loadImage('/assets/images/Entities/tank/tank.png'),
    zombies: {
      zom1: loadImage('/assets/images/Entities/zombies/zombie.png'),
      zom2: loadImage('/assets/images/Entities/zombies/splatter.png'),
    },
    obstacles: {
      obs1: loadImage('/assets/images/Entities/obstacles/truck.png'),
      obs2: loadImage('/assets/images/Entities/obstacles/greentruck.png'),
    },
    human: loadImage('/assets/images/Entities/humans/female-1.png'),
    projectile: loadImage('/assets/images/Entities/tank/projectile.png'),
    boss: loadImage('/assets/images/Entities/zombies/boss.png'),
    heart: loadImage('/assets/images/Entities/tank/heart.png'),
    menuImg: loadImage('/assets/images/bg-menuImg.png'),
    pauseImg: loadImage('/assets/images/newpause.png'),
    gameOverImg: loadImage('/assets/images/newgameover.png'),
    victoryImg: loadImage('/assets/images/newvictory.png'),
    powerups: {
      fuelTank: loadImage('/assets/images/Entities/powerups/fuelTank.png'),
      heart: loadImage('/assets/images/Entities/powerups/heartPlus.png'),
    },
    // controlsImg: loadImage('/assets/images/controls.png'),
  }
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(60)
  sounds.menuMusic.setVolume(0.3)
  sounds.menuMusic.play()
  // noCursor();
  // menu()
  game = new Game()
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update()
  game.draw()
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function mousePressed() {
  userStartAudio()
}
