//1. boolean
var areYouReady = true;
//2. number
var decimal = 6;
var fraction = 6.66;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//3. string
var firstName = "L";
var lastname = 'cng';
var age = 100;
var nameAndAge = firstName + lastname + age;
console.log(nameAndAge);
var greet = "Hi, every body.\nMy name is " + (firstName + lastname) + ".\nI am " + age + " years old..\n";
console.log(greet);
//4. Array
var array = new Array();
array.push(1);
array.push(2);
array.push('3');
var prices = new Array();
prices.push(1);
prices.push(2);
//prices.push('3');
var cars = new Array('BYD', 'EMW', '');
//let colors: Array<string> = {'red', 'green', 'blue'};
//5. Tuple
var heights = [20, '30px'];
function getPrice() {
    return [false, 0, 'error'];
}
var priceResult = getPrice();
console.log(priceResult[0]);
console.log(priceResult[1]);
console.log(priceResult[2]);
//6. enum
var Sex;
(function (Sex) {
    Sex[Sex["Female"] = 0] = "Female";
    Sex[Sex["Male"] = 1] = "Male";
    Sex[Sex["Secret"] = 2] = "Secret"; // 2
})(Sex || (Sex = {}));
var SalaryLevel;
(function (SalaryLevel) {
    SalaryLevel[SalaryLevel["Low"] = 1000] = "Low";
    SalaryLevel[SalaryLevel["Middle"] = 10000] = "Middle";
    SalaryLevel[SalaryLevel["High"] = 100000] = "High";
})(SalaryLevel || (SalaryLevel = {}));
var sex = Sex.Female;
sex = Sex.Male;
var salaryLevel = SalaryLevel.High;
salaryLevel = SalaryLevel.Low;
//7. null和undefined
var job = null;
var hobby = undefined;
// job = 'dev';
// hobby = true;
// let address: string = null;
// address = undefined;
// let height: number = undefined;
// height = null;
// let skills: string[] = null;
// skills = undefined;
//8. any和unknown
var age2 = 30;
age2 = null;
age2 = undefined;
age2 = '30.1';
//9. void
var girlFriend = undefined;
function findGirlFriend() {
    console.log('Just do IT');
}
//10. never
var bePeace;
// bePeace = true;
// bePeace 1000;
// bePeace = 'test';
function error() {
    throw 'error';
}
function xiaoCaiQi() {
    while (true) {
        console.log('never stop');
    }
}
//# sourceMappingURL=3.1.3基礎類型.js.map