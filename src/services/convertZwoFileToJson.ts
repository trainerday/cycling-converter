import { Workout } from '../models/workout'
import { ZwiftStep } from '../models/zwiftStep'
let fs = require('fs')
let Parser = require('node-xml-stream')
const parserLight = require('xml2json-light')

export const convertZwoFileToJson = (filePath: string): Promise<Workout> => {
  return new Promise(function(resolve, reject) {
    let workout = new Workout()

    getJson(filePath).then((res: ZwiftStep[]) => {
      const xmlString = fs.readFileSync(filePath).toString('utf-8')
      const wo = parserLight.xml2json(xmlString).workout_file
      workout.name = wo.name
      workout.description = wo.description
      workout.zwiftSteps = res
      //      console.log(res)
      res.forEach((row: ZwiftStep) => {
        //        console.log(row)
      })
      //  console.log(workout)
      resolve(workout)
    })
  })
}

function getJson(filePath: string) {
  const out: ZwiftStep[] = []
  return new Promise<ZwiftStep[]>(function(resolve, reject) {
    let parser = new Parser()
    parser.on('opentag', (name: string, attrs: any) => {
      if (name === 'SteadyState' || name === 'IntervalsT' || name === 'IntervalsT') {
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
