import { convertZwoFileToJson } from './convertZwoFileToJson'
const testPath = __dirname + '/../../test_data/intervalsT.zwo'

describe('convertZwoFileToJson', () => {
  test('base example first step', async () => {
    const res = await convertZwoFileToJson(testPath)
    expect(res.zwiftSteps.length).toBe(12)
    expect(res.zwiftSteps[0].power).toBe(0.5)
    expect(res.zwiftSteps[0].seconds).toBe(180)
  })
  test('base example 2nd step', async () => {
    const res = await convertZwoFileToJson(testPath)
    expect(res.zwiftSteps[1].repeat).toBe(4)
  })
})
