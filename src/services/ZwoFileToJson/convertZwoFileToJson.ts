/* eslint-disable @typescript-eslint/no-var-requires,null,@typescript-eslint/no-use-before-define */
import { ZwiftWorkout } from '../../models/zwiftWorkout'
import { ZwiftStep } from '../../models/zwiftStep'
import * as fs from 'fs'
let Parser = require('node-xml-stream')
const parserLight = require('xml2json-light')

export const convertZwoFileToJson = (filePath: string): Promise<ZwiftWorkout> => {
  return new Promise(function(resolve) {
    let workout = new ZwiftWorkout()

    getJson(filePath).then((res: ZwiftStep[]) => {
      const xmlString = fs.readFileSync(filePath).toString('utf-8')
      const wo = parserLight.xml2json(xmlString).workout_file
      workout.name = wo.name
      workout.description = wo.description
      workout.zwiftSteps = res
      workout.sport = wo.sportType
      resolve(workout)
    })
  })
}

function getJson(filePath: string) {
  const out: ZwiftStep[] = []
  return new Promise<ZwiftStep[]>(function(resolve, reject) {
    let parser = new Parser()
    parser.on('opentag', (name: string, attrs: any) => {
      if (
        name === 'SteadyState' ||
        name === 'IntervalsT' ||
        name === 'Warmup' ||
        name === 'FreeRide'
      ) {
        const zwiftStep = new ZwiftStep(name, attrs)
        out.push(zwiftStep)
      }
    })

    parser.on('finish', () => {
      resolve(out)
    })

    parser.write('<root>TEXT</root>')

    let stream = fs.createReadStream(filePath)
    stream.pipe(parser)
  })
}
