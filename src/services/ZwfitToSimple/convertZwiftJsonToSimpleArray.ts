import { ZwiftWorkout } from '../../models/zwiftWorkout'
import { Workout } from '../../models/workout'
import { Step } from '../../models/step'
import { ZwiftStep } from '../../models/zwiftStep'

export const convertZwiftJsonToSimpleArray = (workout: ZwiftWorkout): Workout => {
  const wo = new Workout(workout)
  wo.name = workout.name
  wo.description = workout.description
  wo.sport = workout.sport

  workout.zwiftSteps.forEach((zwiftStep: ZwiftStep) => {
    if (zwiftStep.name === 'Warmup') {
      const step = new Step()
      step.seconds = zwiftStep.duration
      step.powerStart = zwiftStep.powerLow
      step.powerEnd = zwiftStep.powerHigh
      wo.steps.push(step)
    }

    if (zwiftStep.name === 'FreeRide') {
      const step = new Step()
      step.seconds = zwiftStep.duration
      step.powerLow = 40
      step.powerHigh = 85
      if (zwiftStep.cadence) {
        step.cadence = zwiftStep.cadence
      }
      wo.steps.push(step)
    }

    if (zwiftStep.name === 'SteadyState') {
      const step = new Step()
      step.seconds = zwiftStep.duration
      step.power = zwiftStep.power
      if (zwiftStep.cadence) {
        step.cadence = zwiftStep.cadence
      }
      wo.steps.push(step)
    }

    if (zwiftStep.name === 'IntervalsT') {
      for (let i = 0; i < zwiftStep.repeat; i++) {
        const step = new Step()
        step.seconds = zwiftStep.onDuration
        if (zwiftStep.cadence) {
          step.cadence = zwiftStep.cadence
        }
        step.power = zwiftStep.onPower
        wo.steps.push(step)

        const stepRest = new Step()
        stepRest.seconds = zwiftStep.offDuration
        if (zwiftStep.cadenceResting) {
          stepRest.cadence = zwiftStep.cadenceResting
        }
        stepRest.power = zwiftStep.offPower
        wo.steps.push(stepRest)
      }
    }
  })

  return wo
}
