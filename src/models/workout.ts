import { Step } from './step'
import { ZwiftWorkout } from './zwiftWorkout'

export class Workout {
  public name: string
  public description: string
  public sport: string
  public steps: Step[]
  public constructor(zwiftWorkout: ZwiftWorkout) {
    this.name = zwiftWorkout.name
    this.description = zwiftWorkout.description
    this.steps = []
    this.sport = zwiftWorkout.sport
  }
}
