import { TPWorkout } from "../../models/tpWorkout";
import { Step } from '../../models/step';
export declare const convertStepsToTP: (name: string, steps: Step[], sport: string, athleteId: string, workoutDay: Date) => TPWorkout;
