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
const convertZwiftJsonToSimpleArray_1 = require("./convertZwiftJsonToSimpleArray");
const zwiftWorkout_1 = require("../models/zwiftWorkout");
const zwiftStep_1 = require("../models/zwiftStep");
describe('convertZwoFileToJson', () => {
    test('Warmup', () => __awaiter(void 0, void 0, void 0, function* () {
        const workout = new zwiftWorkout_1.ZwiftWorkout();
        workout.zwiftSteps.push(new zwiftStep_1.ZwiftStep('Warmup', { Power: '50' }));
        const res = yield convertZwiftJsonToSimpleArray_1.convertZwiftJsonToSimpleArray(workout);
        expect(res.steps.length).toBe(1);
    }));
    test('SteadyState', () => __awaiter(void 0, void 0, void 0, function* () {
        const workout = new zwiftWorkout_1.ZwiftWorkout();
        workout.zwiftSteps.push(new zwiftStep_1.ZwiftStep('Warmup', { Power: '50' }));
        const res = yield convertZwiftJsonToSimpleArray_1.convertZwiftJsonToSimpleArray(workout);
        expect(res.steps.length).toBe(1);
    }));
    test('IntervalT', () => __awaiter(void 0, void 0, void 0, function* () {
        const workout = new zwiftWorkout_1.ZwiftWorkout();
        const attrs = {
            Repeat: '4',
            OnDuration: '10',
            OffDuration: '50',
            OnPower: '1.7544999',
            OffPower: '0.50449997',
            Cadence: '110',
            CadenceResting: '80',
        };
        workout.zwiftSteps.push(new zwiftStep_1.ZwiftStep('IntervalT', attrs));
        const res = yield convertZwiftJsonToSimpleArray_1.convertZwiftJsonToSimpleArray(workout);
        expect(res.steps.length).toBe(8);
    }));
});
//# sourceMappingURL=convertZwiftJsonToSimpleArray.test.js.map