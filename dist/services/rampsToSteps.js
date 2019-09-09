"use strict";
module.exports = {
    convertFromRampsToSteps: function (segments) {
        var steps = convertFromRampsToSteps(segments);
        return steps;
    },
};
function convertFromRampsToSteps(segments) {
    var out = [];
    segments.forEach(segment => {
        var steps = getSteps(segment);
        out = out.concat(steps);
    });
    return out;
}
function getSteps(segment) {
    var out = [];
    var minutes = segment[0];
    if (segment[2] == null) {
        segment[2] = segment[1];
        return [segment];
    }
    if (segment[1] == segment[2])
        return [segment];
    if (minutes < 1) {
        var avg = Math.round([(segment[1] + segment[2]) / 2]);
        segment[1] = avg;
        segment[2] = avg;
        return [segment];
    }
    //below means it is a ramp longer than 1 minute
    var seconds = minutes * 60;
    var startPercent = segment[1];
    var endPercent = segment[2];
    var diff = startPercent - endPercent;
    var diffPercent = diff / endPercent;
    var direction = 'down';
    if (diff < 0) {
        direction = 'up';
        diff = Math.abs(diff);
        var diffPercent = diff / startPercent;
    }
    var rampTypeObj = { diffPercent: diffPercent, diff: diff };
    // 10 minutes and 15 percent could be 4 segments
    var segments = parseInt(minutes * rampTypeObj.diffPercent + 1);
    //  console.log('segcount',segments)
    var rampsize = rampTypeObj.diff / segments;
    var secondsSegment = seconds / segments;
    var totalSeconds = 0;
    for (var i = 1; i <= segments; i++) {
        var addPercent = rampsize * (i - 0.5);
        if (direction == 'down')
            addPercent = -addPercent;
        var powerPercent = Math.round(startPercent + addPercent);
        if (i == 1) {
            powerPercent = startPercent;
        }
        if (i == segments) {
            powerPercent = endPercent;
            secondsSegment = seconds - totalSeconds;
        }
        secondsSegment = Math.round(secondsSegment);
        var segMinutes = Math.round((secondsSegment / 60) * 100) / 100;
        var obj = [segMinutes, powerPercent, powerPercent];
        totalSeconds += secondsSegment;
        //    console.log(secondsSegment,totalSeconds,seconds)
        out.push(obj);
    }
    return out;
}
//    var segment=[[10,66,66],[0.25,105,105],[0.75,45,45],[0.5,105,105],[0.5,45,45],[0.75,105,105],[0.25,45,45],[1,105,105],[1,45,45],[0.75,105,105],[0.25,45,45],[0.5,105,105],[0.5,45,45],[0.25,105,105],[0.75,45,45],[0.25,105,105],[0.75,45,45],[0.5,105,105],[0.5,45,45],[0.75,105,105],[0.25,45,45],[1,105,105],[1,45,45],[0.75,105,105],[0.25,45,45],[0.5,105,105],[0.5,45,45],[0.25,105,105],[0.75,45,45],[10,76,25]];
//# sourceMappingURL=rampsToSteps.js.map