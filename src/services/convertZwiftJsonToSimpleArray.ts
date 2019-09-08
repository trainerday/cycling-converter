import { ZwiftWorkout } from '../models/zwiftWorkout'
import { Workout } from '../models/workout'
import {Step} from "../models/step"

export const convertZwiftJsonToSimpleArray = (workout: ZwiftWorkout): Workout => {
  const wo = new Workout(workout)
  const step = new Step()
  step.power = workout.zwiftSteps[0].power
  wo.steps.push(step)
  return wo
}
