"use strict";
exports.__esModule = true;
var hello_world_1 = require("./hello-world");
// debugger;
hello_world_1.helloWorld();
var i = 1;
setInterval(function () {
    console.log('odd:' + i);
    i += 2;
}, 3000);
