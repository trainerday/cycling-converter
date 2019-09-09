import { Workout } from './workout'
import { TpStep } from './tpStep'
import { Step } from './step'

export class TPWorkout {
  public AthleteId: string
  public Title: string
  public WorkoutDay: string
  public WorkoutType: string
  public TotalTimePlanned: string
  public Structure: string
  public constructor(workout: Workout, athleteId: string, dateString: string) {
    this.AthleteId = athleteId
    this.Title = workout.name
    this.WorkoutDay = dateString
    this.WorkoutType = workout.sport //run,bike
    this.TotalTimePlanned = '1'
    const arr: TpStep[] = []
    workout.steps.forEach((step: Step) =>{
      arr.push(new TpStep(step.seconds, step.power))
    })

    this.Structure = JSON.stringify(arr)
  }
}