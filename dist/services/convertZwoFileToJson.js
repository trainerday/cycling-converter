"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires,null,@typescript-eslint/no-use-before-define */
const zwiftWorkout_1 = require("../models/zwiftWorkout");
const zwiftStep_1 = require("../models/zwiftStep");
const fs = __importStar(require("fs"));
let Parser = require('node-xml-stream');
const parserLight = require('xml2json-light');
exports.convertZwoFileToJson = (filePath) => {
    return new Promise(function (resolve) {
        let workout = new zwiftWorkout_1.ZwiftWorkout();
        getJson(filePath).then((res) => {
            const xmlString = fs.readFileSync(filePath).toString('utf-8');
            const wo = parserLight.xml2json(xmlString).workout_file;
            workout.name = wo.name;
            workout.description = wo.description;
            workout.zwiftSteps = res;
            resolve(workout);
        });
    });
};
function getJson(filePath) {
    const out = [];
    return new Promise(function (resolve, reject) {
        let parser = new Parser();
        parser.on('opentag', (name, attrs) => {
            if (name === 'SteadyState' ||
                name === 'IntervalsT' ||
                name === 'Warmup' ||
                name === 'FreeRide') {
                const zwiftStep = new zwiftStep_1.ZwiftStep(name, attrs);
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