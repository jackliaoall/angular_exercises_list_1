"use strict";
exports.__esModule = true;
exports.helloWorld = void 0;
function helloWorld() {
    console.log('hello, world');
}
exports.helloWorld = helloWorld;
var i = 0;
setInterval(function () {
    console.log('even:' + i);
    i += 2;
}, 3000);
