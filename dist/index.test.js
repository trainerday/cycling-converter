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
const convertZwoFileToJson_1 = require("./services/convertZwoFileToJson");
describe('convertZwoFileToJson', () => {
    test('empty xml string should not have any steps', () => __awaiter(void 0, void 0, void 0, function* () {
        var res = yield convertZwoFileToJson_1.convertZwoFileToJson(__dirname + '/test_data/intervalsT.zwo');
        console.log(res.zwiftSteps[0]);
        expect(res.zwiftSteps.length).toBe(12);
        expect(res.zwiftSteps[0].Power).toBe('0.50449997');
    }));
});
//# sourceMappingURL=index.test.js.map