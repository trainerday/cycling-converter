"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tpStep_1 = require("./tpStep");
class TPWorkout {
    constructor(workout, athleteId, dateString) {
        this.AthleteId = athleteId;
        this.Title = workout.name;
        this.WorkoutDay = dateString;
        this.WorkoutType = workout.sport; //run,bike
        this.TotalTimePlanned = '1';
        const arr = [];
        workout.steps.forEach((step) => {
            arr.push(new tpStep_1.TpStep(step.seconds, step.power));
        });
        this.Structure = JSON.stringify(arr);
    }
}
exports.TPWorkout = TPWorkout;
//# sourceMappingURL=tpWorkout.js.map