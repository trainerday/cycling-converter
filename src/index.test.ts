import { convertZwoFileToJson } from './index'
import { convertZwiftJsonToSimpleArray } from './index'

describe('convertZwoFileToJson', () => {
  test('base example first step', async () => {
    const res = await convertZwoFileToJson(__dirname + '/test_data/intervalsT.zwo')

    const final = convertZwiftJsonToSimpleArray(res)
    expect(final.steps.length).toBe(46)
  })
})
