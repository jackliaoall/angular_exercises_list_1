//How to Run
//tsc TypeScript_Basics.ts
//node TypeScript_Basics.js
//Data Type
//(1)Boolean
var isDog = false;
console.log(isDog);
//(2)Number
var num1 = 10;
var num2 = 5.5;
console.log(num1 + num2);
//(3)Str
var str1 = 'Hello';
var str2 = "TypeScript";
console.log(str1 + " " + str2);
//(4)數組類型與元組類型
var arr1 = [1, 2, 3];
//泛型
var arr2 = [1, 2, 3];
//定義元組類型
var arr3 = ['Hello', 10];
var arr4 = [10, 'Hello'];
//(5)Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log('Red=' + Color.Blue);
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 2] = "Dog";
    Animal[Animal["Cat"] = 4] = "Cat";
    Animal[Animal["Bird"] = 5] = "Bird";
})(Animal || (Animal = {}));
console.log('Red=' + Animal.Dog);
//(6)any
var age = 18;
age = 'eighteen';
console.log(age);
//(7)void
//undefined
var unusable = undefined;
/*function someFunction(): void {}
==
function someFunction() {}*/
//Function
//(1)Hot to use
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(1, 2));
var addString = function (a, b) {
    return a + b;
};
console.log(addString('Hello', 'TypeScript'));
//(2)Constructor()
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var stu = new Student('LiSi', 18);
console.log('name' + stu.name + ' age:' + stu.age);
//(3)可選參數
function add(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(add(3, 2));
console.log(add(3));
//(4)默認參數
function add(a, b) {
    if (b === void 0) { b = 5; }
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(add(3, 2));
console.log(add(3));
//(5)箭頭函數
var Person = {
    'name': 'LiSi',
    'printName': function () {
        var fun = function () {
            return 'Name: ' + this.name;
        };
        return fun();
    }
};
console.log(Person.printName());
//Name: undefined
var Person = {
    'name': 'LiSi',
    'printName': function () {
        var self = this;
        var fun = function () {
            return 'Name: ' + this.name;
        };
        return fun();
    }
};
console.log(Person.printName());
//Name: LiSi
var Person = {
    'name': 'LiSi',
    'printName': function () {
        var _this = this;
        var fun = function () {
            return 'Name: ' + _this.name;
        };
        return fun();
    }
};
console.log(Person.printName());
//Name: LiSi
