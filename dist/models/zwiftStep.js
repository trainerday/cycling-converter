"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ZwiftStep {
    constructor(name, attrs) {
        this.Power = () => this._attrs.Power;
        this.Seconds = () => this._attrs.Duration;
        this._name = name;
        this._attrs = attrs;
    }
}
exports.ZwiftStep = ZwiftStep;
//# sourceMappingURL=zwiftStep.js.map