"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tpWorkout_1 = require("../../models/tpWorkout");
const moment_1 = __importDefault(require("moment"));
const tpStep_1 = require("../../models/tpStep");
exports.convertToTpWorkout = (workout, athleteId, workoutDay) => {
    const workoutDate = moment_1.default(workoutDay).format('YYYY-MM-DDTHH:mm:ssZ'); //'2019-07-16T12:40:13-06:00'
    const stepsOut = [];
    workout.steps.forEach((step) => {
        const obj = new tpStep_1.TpStep(step.seconds, step.power);
        stepsOut.push(obj);
    });
    const tpWorkout = new tpWorkout_1.TPWorkout(workout, athleteId, workoutDate);
    return tpWorkout;
};
//# sourceMappingURL=convertToTpWorkout.js.map