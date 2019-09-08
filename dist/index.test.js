"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertZwoFileToJson_1 = require("./services/convertZwoFileToJson");
describe('convertZwoFileToJson', () => {
    test('empty xml string should not have any steps', () => {
        convertZwoFileToJson_1.convertZwoFileToJson('./test_data/intervalsT.zwo').then((res) => {
            console.log(res);
        });
    });
});
//# sourceMappingURL=index.test.js.map