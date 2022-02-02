class RoadBlock extends Entity {
  constructor(y: number) {
    const size = height * .2
    const health = 1
    const position = createVector(width, y)
    const sound = sounds.crash
    const img = images.obstacles.obs2
    const points = 0
    const damage = 0
    const ishit = false
    const velocity: p5.Vector = createVector(-2, 0)
    const hitBoxPosition = createVector(size * .02, size * .09)
    const hitBoxSize = createVector(size * .6, size * .9)

    super(
      size,
      health,
      position,
       img,
       points,
       damage,
       ishit,
       sound,
       hitBoxSize,
       hitBoxPosition,
       velocity
     )
   }
 }
