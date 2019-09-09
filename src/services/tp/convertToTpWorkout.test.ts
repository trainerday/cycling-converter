import { convertToTpWorkout } from './convertToTpWorkout'
import { Workout } from '../../models/workout'
import { convertZwiftJsonToSimpleArray, convertZwoFileToJson } from '../..'
import { ZwiftWorkout } from '../../models/zwiftWorkout'

const testPath = __dirname + '/../../test_data/intervalsT.zwo'

describe('Training Peaks', () => {
  test('check number of steps', async () => {
    const zwiftWorkout: ZwiftWorkout = await convertZwoFileToJson(testPath)
    const workout: Workout = convertZwiftJsonToSimpleArray(zwiftWorkout)
    const res = convertToTpWorkout(workout, '1', new Date())
    expect(res.Title).toBe("Day 5 - 40/20's #1")
    const steps = JSON.parse(res.Structure)
    expect(steps.length).toBe(46)
    console.log(steps)
  })
})