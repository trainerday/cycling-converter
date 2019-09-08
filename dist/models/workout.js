"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Workout {
    constructor(zwiftWorkout) {
        this.name = zwiftWorkout.name;
        this.description = zwiftWorkout.description;
        this.steps = [];
        this.sport = zwiftWorkout.sport;
    }
}
exports.Workout = Workout;
//# sourceMappingURL=workout.js.map