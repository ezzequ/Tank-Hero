interface Images {
  tank: p5.Image
  bgImg: p5.Image
  zombies: {
    zom1: p5.Image
    zom2: p5.Image
    zom3: p5.Image
    zom4: p5.Image
  }
  splatter: p5.Image
  obstacles: {
    obs1: p5.Image
    obs1destroyed: p5.Image
    obs2: p5.Image
    ob2destroyed: p5.Image
  }
  humans: {
    human1: p5.Image
    human2: p5.Image
  }
  projectile: p5.Image
  boss: p5.Image
  heart: p5.Image
  menuImg: p5.Image
  pauseImg: p5.Image
  gameOverImg: p5.Image
  victoryImg: p5.Image
  powerups: {
    fuelTank: p5.Image
    heart: p5.Image
  }
}
interface Sounds {
  menuMusic: p5.SoundFile
  gameMusic: p5.SoundFile
  readyGo: p5.SoundFile
  crash: p5.SoundFile
  gameOverSound: p5.SoundFile
  gameOverMusic: p5.SoundFile
  saved: p5.SoundFile
  humanDeath: p5.SoundFile
  zombieEat: p5.SoundFile
  entityKilled: p5.SoundFile
  bossDeath: p5.SoundFile
  fuelPickup: p5.SoundFile
  heartPickup: p5.SoundFile
  shot: p5.SoundFile
}
interface Font {
  gameFont: p5.Font
}
