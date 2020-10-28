"use strict";
exports.__esModule = true;
exports.Bacteria = exports.Animal = exports.People = void 0;
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());
exports.People = People;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
exports.Animal = Animal;
var Bacteria = /** @class */ (function () {
    function Bacteria() {
    }
    Object.defineProperty(Bacteria.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Bacteria.prototype.gorw = function () {
        this._age++;
    };
    return Bacteria;
}());
exports.Bacteria = Bacteria;
// let person: People = new Animal();
// let animal: Animal = new People();
var person = new Animal();
var animal = new People();
// let plants: { name: string, gorw: () => void } = {
//     name: 'tree',
//     grow: (): void => {
//         console.log('...');
//     }
// };
var bacteria = new Bacteria();
//let bacteria_2: { name: string, age: number, grow(): void } = new Bacteria();
