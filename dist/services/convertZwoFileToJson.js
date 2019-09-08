"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workout_1 = require("../models/workout");
const zwiftStep_1 = require("../models/zwiftStep");
let Parser = require('node-xml-stream');
let fs = require('fs');
const parserLight = require('xml2json-light');
exports.convertZwoFileToJson = (filePath) => {
    return new Promise(function (resolve, reject) {
        let workout = new workout_1.Workout();
        getJson(filePath).then((res) => {
            var xmlString = fs.readFileSync(filePath).toString('utf-8');
            var wo = parserLight.xml2json(xmlString).workout_file;
            workout.name = wo.name;
            workout.description = wo.description;
            workout.zwiftSteps = res;
            res.forEach((row) => {
                console.log(row);
            });
            //  console.log(workout)
            resolve(workout);
        });
    });
};
function getJson(filePath) {
    var out = [];
    return new Promise(function (resolve, reject) {
        let parser = new Parser();
        parser.on('opentag', (name, attrs) => {
            if (name === 'SteadyState' || name === 'IntervalsT') {
                var zwiftStep = new zwiftStep_1.ZwiftStep();
                zwiftStep.name = name;
                zwiftStep.attrs = attrs;
                out.push(zwiftStep);
            }
        });
        parser.on('finish', () => {
            resolve(out);
        });
        parser.write('<root>TEXT</root>');
        let stream = fs.createReadStream(filePath);
        stream.pipe(parser);
    });
}
//# sourceMappingURL=convertZwoFileToJson.js.map