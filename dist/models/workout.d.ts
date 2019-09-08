import { Step } from './step';
import { ZwiftStep } from './zwiftStep';
export declare class Workout {
    name: string;
    description: string;
    sport: string;
    steps: Step[];
    zwiftSteps: ZwiftStep[];
    constructor();
}
