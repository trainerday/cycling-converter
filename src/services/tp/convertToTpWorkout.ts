import { TPWorkout } from '../../models/tpWorkout'
import { Step } from '../../models/step'
import moment from 'moment'
import { TpStep } from '../../models/tpStep'
import { Workout } from '../../models/workout'

export const convertToTpWorkout = (
  workout: Workout,
  athleteId: string,
  workoutDay: Date,
): TPWorkout => {
  const workoutDate = moment(workoutDay).format('YYYY-MM-DDTHH:mm:ssZ') //'2019-07-16T12:40:13-06:00'

  const stepsOut: TpStep[] = []
  workout.steps.forEach((step: Step) => {
    const obj = new TpStep(step.seconds, step.power)
    stepsOut.push(obj)
  })

  const tpWorkout = new TPWorkout(workout, athleteId, workoutDate)
  return tpWorkout
}