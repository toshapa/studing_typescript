"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
var res = logMiddleware(12);
function getHalf(data) {
    var t = data.length / 2;
    return data.splice(-2, t);
}
console.log(getHalf([1, 2, 3, 4, 5, 4, 33]));
var split = getHalf;
var logLine = {
    date: new Date(),
    data: {
        b: 1,
        c: 3,
    },
};
