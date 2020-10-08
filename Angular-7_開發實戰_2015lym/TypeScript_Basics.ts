//How to Run
//tsc TypeScript_Basics.ts
//node TypeScript_Basics.js

//Data Type
//(1)Boolean
let isDog: boolean = false;
console.log(isDog)

//(2)Number
let num1: number = 10;
let num2: number = 5.5;
console.log(num1 + num2)

//(3)Str
let str1: string = 'Hello';
let str2: string = "TypeScript"
console.log(`${str1} ${str2}`)

//(4)數組類型與元組類型
let arr1: number[] = [1,2,3];

//泛型
let arr2: Array<number> = [1,2,3];

//定義元組類型
let arr3 = ['Hello', 10];
let arr4 = [10, 'Hello'];

//(5)Enum
enum Color {Red=1, Green, Blue}
console.log('Red='+Color.Blue)
enum Animal {Dog=2, Cat=4, Bird=5}
console.log('Red='+Animal.Dog)

//(6)any
let age: any = 18;
age = 'eighteen';
console.log(age);

//(7)void
//undefined
let unusable: void = undefined;

/*function someFunction(): void {}
==
function someFunction() {}*/

//Function
//(1)Hot to use
function addNumber(a: number, b: number) {
  return a + b;
}
console.log(addNumber(1, 2));

let addString = function(a: string, b: string) {
  return a + b;
}
console.log(addString('Hello', 'TypeScript'));

//(2)Constructor()
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let stu = new Student('LiSi', 18);
console.log('name' + stu.name + ' age:' + stu.age);

//(3)可選參數
function add(a: number, b?: number) {
  if(b) {
    return a + b;
  } else {
    return a;
  }
}

console.log(add(3, 2))
console.log(add(3))

//(4)默認參數
function add(a: number, b?: number = 5) {
  if(b) {
    return a + b;
  } else {
    return a;
  }
}

console.log(add(3, 2))
console.log(add(3))

//(5)箭頭函數
const Person = {
  'name': 'LiSi',
  'printName': function() {
    let fun = function() {
      return 'Name: ' + this.name;
    }
    return fun();
  }
};

console.log(Person.printName());
//Name: undefined

const Person = {
  'name': 'LiSi',
  'printName': function() {
    let self = this;
    let fun = function() {
      return 'Name: ' + this.name;
    }
    return fun();
  }
};

console.log(Person.printName());
//Name: LiSi

const Person = {
  'name': 'LiSi',
  'printName': function() {
    let fun = () => {
      return 'Name: ' + this.name;
    }
    return fun();
  }
};

console.log(Person.printName());
//Name: LiSi