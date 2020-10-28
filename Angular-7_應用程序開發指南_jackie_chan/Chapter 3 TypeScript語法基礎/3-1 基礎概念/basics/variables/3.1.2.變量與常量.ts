export {} // 使當前文件成為一個模塊

for(let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i) }, 100 * i);
}

var student = 'L';
var student = 'Lcng';

let teacher = 'Jack';
//let teacher = 'Jack2';

//const E; // Error, 必須在定義同時被給值

const PI = 3.14;
//PI = 3.14L; // Error, 常量不可重新給值

const CIRCLE = {
    radius: 12
}
CIRCLE.radius = 23; // 合法, 常量的屬性可以被重新給值