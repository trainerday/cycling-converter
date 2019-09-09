import { convertZwiftJsonToSimpleArray } from './convertZwiftJsonToSimpleArray'
import { ZwiftWorkout } from '../../models/zwiftWorkout'
import { ZwiftStep } from '../../models/zwiftStep'

describe('convertZwoFileToJson', () => {
  test('basic properties', async () => {
    const workout = new ZwiftWorkout()
    workout.name = 'big name'
    workout.sport = 'bike'
    workout.description = 'desc cool'
    const res = await convertZwiftJsonToSimpleArray(workout)
    expect(res.name).toBe('big name')
    expect(res.sport).toBe('bike')
    expect(res.description).toBe('desc cool')
  })
  test('Warmup', async () => {
    const workout = new ZwiftWorkout()
    workout.zwiftSteps.push(new ZwiftStep('Warmup', { Power: '50' }))

    const res = await convertZwiftJsonToSimpleArray(workout)
    expect(res.steps.length).toBe(1)
  })
  test('SteadyState', async () => {
    const workout = new ZwiftWorkout()
    workout.zwiftSteps.push(new ZwiftStep('Warmup', { Power: '50' }))

    const res = await convertZwiftJsonToSimpleArray(workout)
    expect(res.steps.length).toBe(1)
  })
  test('FreeRide', async () => {
    const workout = new ZwiftWorkout()
    workout.zwiftSteps.push(new ZwiftStep('FreeRide', { Duration: '600' }))

    const res = await convertZwiftJsonToSimpleArray(workout)
    expect(res.steps[0].powerLow).toBe(40)
  })
  test('IntervalT', async () => {
    const workout = new ZwiftWorkout()
    const attrs: any = {
      Repeat: '4',
      OnDuration: '10',
      OffDuration: '50',
      OnPower: '1.7544999',
      OffPower: '0.50449997',
      Cadence: '110',
      CadenceResting: '80',
    }
    workout.zwiftSteps.push(new ZwiftStep('IntervalsT', attrs))

    const res = await convertZwiftJsonToSimpleArray(workout)
    expect(res.steps.length).toBe(8)
  })
})
