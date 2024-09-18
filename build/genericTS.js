"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
var res = logMiddleware(12);
