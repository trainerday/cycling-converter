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
const convertZwoFileToJson_1 = require("./convertZwoFileToJson");
const testPath = __dirname + '/../../test_data/intervalsT.zwo';
describe('convertZwoFileToJson', () => {
    test('base example first step', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield convertZwoFileToJson_1.convertZwoFileToJson(testPath);
        expect(res.zwiftSteps.length).toBe(12);
        expect(res.zwiftSteps[0].power).toBe(0.5);
        expect(res.zwiftSteps[0].seconds).toBe(180);
    }));
    test('base example 2nd step', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield convertZwoFileToJson_1.convertZwoFileToJson(testPath);
        expect(res.zwiftSteps[1].repeat).toBe(4);
    }));
});
//# sourceMappingURL=convertZwoFileToJson.test.js.map