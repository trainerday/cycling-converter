/* eslint-disable @typescript-eslint/no-use-before-define */
export class ZwiftStep {
  private readonly _name: string
  private _attrs: any

  public constructor(name: string, attrs: any) {
    this._name = name
    this._attrs = attrs
  }

  public get name(): string {
    return this._name
  }
  public get power(): number {
    return round2(parseFloat(this._attrs.Power))
  }

  public get powerLow(): number {
    return round2(parseFloat(this._attrs.PowerLow))
  }
  public get powerHigh(): number {
    return round2(parseFloat(this._attrs.PowerHigh))
  }

  public get seconds(): number {
    return parseInt(this._attrs.Duration)
  }
  public get repeat(): number {
    return parseInt(this._attrs.Repeat)
  }

  public get duration(): number {
    return parseInt(this._attrs.Duration)
  }

  public get onDuration(): number {
    return parseInt(this._attrs.OnDuration)
  }

  public get offDuration(): number {
    return parseInt(this._attrs.OffDuration)
  }

  public get onPower(): number {
    return round2(parseFloat(this._attrs.OnPower))
  }

  public get offPower(): number {
    return round2(parseFloat(this._attrs.OffPower))
  }

  public get cadence(): number {
    return parseInt(this._attrs.Cadence)
  }

  public get cadenceResting(): number {
    return parseInt(this._attrs.CadenceResting)
  }
}

function round2(inp: number): number{
  return Math.round(inp * 100) / 100
}
