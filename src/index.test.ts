/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import {Workout} from './models/workout'
import { convertZwoFileToJson } from './services/convertZwoFileToJson';

describe('convertZwoFileToJson', () => {
  test('empty xml string should not have any steps', async () => {
    var res = await convertZwoFileToJson(__dirname + '/test_data/intervalsT.zwo')
    console.log (res.zwiftSteps[0])
    expect(res.zwiftSteps.length).toBe(12)
    expect(res.zwiftSteps[0].attrs.Power).toBe("0.50449997")
  })

})

