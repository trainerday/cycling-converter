"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const convertToTpWorkout_1 = require("./convertToTpWorkout");
const workout_1 = require("../../models/workout");
const __1 = require("../..");
const testPath = __dirname + '/../../test_data/intervalsT.zwo';
describe('convertZwoFileToJson', () => {
    test('base example first step', () => __awaiter(void 0, void 0, void 0, function* () {
        const tpWorkout = yield __1.convertZwoFileToJson(testPath);
        const workout = new workout_1.Workout(tpWorkout);
        const res = convertToTpWorkout_1.convertToTpWorkout(workout, '1', new Date());
        expect(res.Title).toBe('123');
    }));
});
//# sourceMappingURL=tpWorkout.test.js.map