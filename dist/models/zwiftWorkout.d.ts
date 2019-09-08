import { Step } from './step';
import { ZwiftStep } from './zwiftStep';
export declare class ZwiftWorkout {
    name: string;
    description: string;
    sport: string;
    steps: Step[];
    zwiftSteps: ZwiftStep[];
    constructor();
}
