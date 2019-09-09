"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TpStep {
    constructor(seconds, percent) {
        this.IntensityClass = 'Active';
        this.Name = 'Active';
        this.Type = 'Step';
        this.IntensityTarget = { Unit: 'PercentOfFtp', Value: percent };
        this.Length = { Unit: 'Second', Value: seconds };
    }
}
exports.TpStep = TpStep;
//# sourceMappingURL=tpStep.js.map