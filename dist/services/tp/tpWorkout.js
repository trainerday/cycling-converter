"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const rampsToSteps_1 = require("../rampsToSteps");
const tpStep_1 = require("../../models/tpStep");
exports.convertStepsToTP = (name, steps, sport, athleteId, workoutDay) => {
    const workoutDate = moment_1.default(workoutDay).format('YYYY-MM-DDTHH:mm:ssZ'); //'2019-07-16T12:40:13-06:00'
    const stepsOut = [];
    steps.forEach((step) => {
        const obj = new tpStep_1.TpStep(step.seconds, step.power);
        stepsOut.push(obj);
    });
    var steps = rampsToSteps_1.convertRampsToSteps(segments);
    var stepsOut = [];
    steps.forEach(step => {
        var secondsSegment = step[0] * 60;
        var powerPercent = step[1];
        var obj = new tpStep_1.TpStep(secondsSegment, powerPercent);
        stepsOut.push(obj);
    });
    var workout = getWorkoutObject(name, sport, athleteId, stepsOut, workoutDay);
    //console.log(workout)
    return workout;
};
function getWorkoutObject(workoutName, sport, athleteId, structure, workoutDay) {
    var wo = {
        AthleteId: athleteId + '',
        Title: workoutName,
        WorkoutDay: workoutDay,
        WorkoutType: sport,
        TotalTimePlanned: "1",
        Structure: JSON.stringify(structure)
    };
    return wo;
}
//# sourceMappingURL=tpWorkout.js.map