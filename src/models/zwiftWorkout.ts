import { Step } from './step'
import { ZwiftStep } from './zwiftStep'
export class ZwiftWorkout {
  public name: string
  public description: string
  public sport: string
  public steps: Step[]
  public zwiftSteps: ZwiftStep[]
  public constructor() {
    this.name = ''
    this.description = ''
    this.steps = []
    this.sport = ''
    this.zwiftSteps = []
  }
}
