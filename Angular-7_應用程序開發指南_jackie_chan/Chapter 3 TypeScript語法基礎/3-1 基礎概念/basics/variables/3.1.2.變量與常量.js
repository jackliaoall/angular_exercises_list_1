"use strict";
exports.__esModule = true;
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var student = 'L';
var student = 'Lcng';
var teacher = 'Jack';
//let teacher = 'Jack2';
//const E; // Error, 必須在定義同時被給值
var PI = 3.14;
//PI = 3.14L; // Error, 常量不可重新給值
var CIRCLE = {
    radius: 12
};
CIRCLE.radius = 23; // 合法, 常量的屬性可以被重新給值
//# sourceMappingURL=3.1.2.變量與常量.js.map