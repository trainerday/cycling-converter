"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-use-before-define */
class ZwiftStep {
    constructor(name, attrs) {
        this._name = name;
        this._attrs = attrs;
    }
    get name() {
        return this._name;
    }
    get power() {
        return round2(parseFloat(this._attrs.Power));
    }
    get powerLow() {
        return round2(parseFloat(this._attrs.PowerLow));
    }
    get powerHigh() {
        return round2(parseFloat(this._attrs.PowerHigh));
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
        return round2(parseFloat(this._attrs.OnPower));
    }
    get offPower() {
        return round2(parseFloat(this._attrs.OffPower));
    }
    get cadence() {
        return parseInt(this._attrs.Cadence);
    }
    get cadenceResting() {
        return parseInt(this._attrs.CadenceResting);
    }
}
exports.ZwiftStep = ZwiftStep;
function round2(inp) {
    return Math.round(inp * 100) / 100;
}
//# sourceMappingURL=zwiftStep.js.map