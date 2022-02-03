
import module = require('p5')
import * as p5Global from 'p5/global'

export = module
export as namespace p5
declare global {
  interface Window {
    p5: typeof module
  }

  function loadSound(
    path: string | string[] | p5.File,
    successCallback?: () => void,
    errorCallback?: (err: unknown) => void,
    loadingCallback?: (percectangeLoaded: number) => void
  ): p5.SoundFile

  function userStartAudio(): void
  function outputVolume(
    volume: number,
    rampTime?: number,
    timeFromNow?: number
  ): void
  function getOutputVolume(): number
}
