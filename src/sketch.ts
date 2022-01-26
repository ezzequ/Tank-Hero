//---- GLOBAL VARIABLES ----//
let game: Game

let sound: Sounds
let images: Images

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {

  sound = {
    menuMusic: loadSound('/assets/music/menumusic1.mp3')
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
      obs2: loadImage('/assets/images/Entities/obstacles/greentruck.png')
    },
    human: loadImage('/assets/images/Entities/humans/female-1.png'),
    projectile: loadImage('/assets/images/Entities/tank/projectile.png'),
    boss: loadImage('/assets/images/Entities/zombies/boss.png'),
    heart: loadImage('/assets/images/Entities/tank/heart.png'),
    menuImg: loadImage('/assets/images/bg-menuImg.png'),
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
