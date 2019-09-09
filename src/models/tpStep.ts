export class TpStep {
  public IntensityClass: string // for simple
  public Name: string //for ramps
  public Type: string
  public IntensityTarget: any //for power ranges
  public Length: any

  public constructor(seconds: number, percent: number) {
    this.IntensityClass = 'Active'
    this.Name = 'Active'
    this.Type = 'Step'
    this.IntensityTarget = { Unit: 'PercentOfFtp', Value: percent }
    this.Length = { Unit: 'Second', Value: seconds }
  }
}

