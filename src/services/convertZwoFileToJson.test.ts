import { convertZwoFileToJson } from './convertZwoFileToJson'

describe('convertZwoFileToJson', () => {
  test('base example first step', async () => {
    const res = await convertZwoFileToJson(__dirname + '/../test_data/intervalsT.zwo')
    expect(res.zwiftSteps.length).toBe(12)
    expect(res.zwiftSteps[0].power).toBe(0.50449997)
    expect(res.zwiftSteps[0].seconds).toBe(180)
  })
  test('base example 2nd step', async () => {
    const res = await convertZwoFileToJson(__dirname + '/../test_data/intervalsT.zwo')
    expect(res.zwiftSteps[1].repeat).toBe(4)
  })
})
