export class Step {
  public power: number // for simple
  public powerStart: number //for ramps
  public powerEnd: number
  public powerHigh: number //for power ranges
  public powerLow: number
  public cadence?: number

  public seconds: number
  public constructor() {
    this.power = 0
    this.powerStart = 0
    this.powerEnd = 0
    this.powerHigh = 0
    this.powerLow = 0
    this.seconds = 0
  }
}
