import { Step } from './step';
import { ZwiftWorkout } from './zwiftWorkout';
export declare class Workout {
    name: string;
    description: string;
    sport: string;
    steps: Step[];
    constructor(zwiftWorkout: ZwiftWorkout);
}
