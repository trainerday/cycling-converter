import { convertZwiftJsonToSimpleArray } from './convertZwiftJsonToSimpleArray'
import { ZwiftWorkout } from '../models/zwiftWorkout'
import { ZwiftStep } from '../models/zwiftStep'

describe('convertZwoFileToJson', () => {
  test('base example first step', async () => {
    const workout = new ZwiftWorkout()
    workout.zwiftSteps.push(new ZwiftStep('Warm-up',{Power:'50'}))

    const res = await convertZwiftJsonToSimpleArray(workout)
    expect(res.steps.length).toBe(1)
  })
})
