import { TPWorkout } from '../../models/tpWorkout';
import { Workout } from '../../models/workout';
export declare const convertToTpWorkout: (workout: Workout, athleteId: string, workoutDay: Date) => TPWorkout;
