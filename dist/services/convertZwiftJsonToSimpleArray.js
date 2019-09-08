"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workout_1 = require("../models/workout");
const step_1 = require("../models/step");
exports.convertZwiftJsonToSimpleArray = (workout) => {
    const wo = new workout_1.Workout(workout);
    wo.name = workout.name;
    wo.description = workout.description;
    wo.sport = workout.sport;
    workout.zwiftSteps.forEach((zwiftStep) => {
        if (zwiftStep.name === 'Warmup') {
            const step = new step_1.Step();
            step.seconds = zwiftStep.duration;
            step.powerStart = zwiftStep.powerLow;
            step.powerEnd = zwiftStep.powerHigh;
            wo.steps.push(step);
        }
        if (zwiftStep.name === 'FreeRide') {
            const step = new step_1.Step();
            step.seconds = zwiftStep.duration;
            step.powerLow = 40;
            step.powerHigh = 85;
            if (zwiftStep.cadence) {
                step.cadence = zwiftStep.cadence;
            }
            wo.steps.push(step);
        }
        if (zwiftStep.name === 'SteadyState') {
            const step = new step_1.Step();
            step.seconds = zwiftStep.duration;
            step.power = zwiftStep.power;
            if (zwiftStep.cadence) {
                step.cadence = zwiftStep.cadence;
            }
            wo.steps.push(step);
        }
        if (zwiftStep.name === 'IntervalsT') {
            for (let i = 0; i < zwiftStep.repeat; i++) {
                const step = new step_1.Step();
                step.seconds = zwiftStep.onDuration;
                if (zwiftStep.cadence) {
                    step.cadence = zwiftStep.cadence;
                }
                step.power = zwiftStep.onPower;
                wo.steps.push(step);
                const stepRest = new step_1.Step();
                stepRest.seconds = zwiftStep.offDuration;
                if (zwiftStep.cadenceResting) {
                    stepRest.cadence = zwiftStep.cadenceResting;
                }
                stepRest.power = zwiftStep.offPower;
                wo.steps.push(stepRest);
            }
        }
    });
    return wo;
};
//# sourceMappingURL=convertZwiftJsonToSimpleArray.js.map