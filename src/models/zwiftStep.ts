export class ZwiftStep {
  private _name: string
  private _attrs: any

  public constructor(name: string, attrs: any) {
    this._name = name
    this._attrs = attrs
  }

  public get name(): string {
    return this.name
  }
  public get power(): number {
    return parseFloat(this._attrs.Power)
  }
  public get seconds(): number {
    return parseInt(this._attrs.Duration)
  }
  public get repeat(): number {
    return parseInt(this._attrs.Repeat)
  }

  public get onDuration(): number {
    return parseInt(this._attrs.OnDuration)
  }

  public get offDuration(): number {
    return parseInt(this._attrs.OffDuration)
  }

  public get onPower(): number {
    return parseFloat(this._attrs.OnPower)
  }

  public get offPower(): number {
    return parseFloat(this._attrs.OffPower)
  }

  public get cadence(): number {
    return parseInt(this._attrs.Cadence)
  }

  public get cadenceResting(): number {
    return parseInt(this._attrs.CadenceResting)
  }
}
