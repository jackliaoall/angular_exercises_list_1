//1.使當前文件成為一個模塊
export {} // 使當前文件成為一個模塊

//2.用for迴圈10次setTimeout打印出i
for(let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i) }, 100 * i);
}

//3.用var定義student並給不同的值
var student = 'L';
var student = 'Lcng';

//4.用let定義teacher並給不同的值
let teacher = 'Jack';
//let teacher = 'Jack2';

//5.用const定義PI為3.14
const PI = 3.14;
//PI = 3.14L; // Error, 常量不可重新給值

//6.用const定義CIRCLE, 值為radius: 12, 之後並重新給值為23
const CIRCLE = {
    radius: 12
}
CIRCLE.radius = 23; // 合法, 常量的屬性可以被重新給值