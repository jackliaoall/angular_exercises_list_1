"use strict";
exports.__esModule = true;
function Person() {
    this.age = 1;
}
// Person.prototype.grow = function() {
//     let that = this;
//     setInterval(function() {
//         console.log(that.age++);
//     }, 2000);
// }
//new Person().grow();
//2.用箭頭函數(Arrow Function)重構
Person.prototype.grow = function () {
    var _this = this;
    setInterval(function () {
        console.log(_this.age++);
    }, 2000);
};
new Person().grow();
