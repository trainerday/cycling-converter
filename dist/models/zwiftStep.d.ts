export declare class ZwiftStep {
    private _name;
    private _attrs;
    constructor(name: string, attrs: any);
    readonly name: string;
    readonly power: number;
    readonly powerLow: number;
    readonly powerHigh: number;
    readonly seconds: number;
    readonly repeat: number;
    readonly duration: number;
    readonly onDuration: number;
    readonly offDuration: number;
    readonly onPower: number;
    readonly offPower: number;
    readonly cadence: number;
    readonly cadenceResting: number;
}
