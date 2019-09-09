import { Workout } from './workout';
export declare class TPWorkout {
    AthleteId: string;
    Title: string;
    WorkoutDay: string;
    WorkoutType: string;
    TotalTimePlanned: string;
    Structure: string;
    constructor(workout: Workout, athleteId: string, dateString: string);
}
