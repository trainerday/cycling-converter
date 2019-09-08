"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ZwiftStep {
    constructor(name, attrs) {
        this._name = name;
        this._attrs = attrs;
    }
    get name() {
        return this.name;
    }
    get power() {
        return parseFloat(this._attrs.Power);
    }
    get powerLow() {
        return parseFloat(this._attrs.PowerLow);
    }
    get powerHigh() {
        return parseFloat(this._attrs.PowerHigh);
    }
    get seconds() {
        return parseInt(this._attrs.Duration);
    }
    get repeat() {
        return parseInt(this._attrs.Repeat);
    }
    get duration() {
        return parseInt(this._attrs.Duration);
    }
    get onDuration() {
        return parseInt(this._attrs.OnDuration);
    }
    get offDuration() {
        return parseInt(this._attrs.OffDuration);
    }
    get onPower() {
        return parseFloat(this._attrs.OnPower);
    }
    get offPower() {
        return parseFloat(this._attrs.OffPower);
    }
    get cadence() {
        return parseInt(this._attrs.Cadence);
    }
    get cadenceResting() {
        return parseInt(this._attrs.CadenceResting);
    }
}
exports.ZwiftStep = ZwiftStep;
//# sourceMappingURL=zwiftStep.js.map