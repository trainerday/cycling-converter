import {Workout} from '../models/workout'
import {Step} from '../models/step'
import {ZwiftStep} from '../models/zwiftStep'

let Parser = require('node-xml-stream')
let fs = require('fs')
const parserLight = require('xml2json-light')


export const convertZwoFileToJson = (filePath : string): Promise<Workout> => {
  return new Promise(function(resolve, reject){

    let workout = new Workout()

    getJson(filePath).then((res : ZwiftStep[]) => {
      var xmlString = fs.readFileSync(filePath).toString('utf-8')
      var wo = parserLight.xml2json(xmlString).workout_file
      workout.name = wo.name
      workout.description = wo.description
      workout.zwiftSteps = res
//      console.log(res)
      res.forEach((row : ZwiftStep) => {
//        console.log(row)
      })
    //  console.log(workout)
      resolve(workout)
    })
  })
}


function getJson(filePath: string){
  var out : ZwiftStep[] = []
  return new Promise<ZwiftStep[]>(function(resolve, reject){
    let parser = new Parser()
    parser.on('opentag', (name : string, attrs : any) => {
      if (name === 'SteadyState' || name === 'IntervalsT'){
        var zwiftStep = new ZwiftStep()
        zwiftStep.name = name
        zwiftStep.attrs = attrs
        out.push (zwiftStep)
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

