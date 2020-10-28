//1.創建一個人類對象並調用其grow()方法來體現人類對象的成長
export {}

function Person() {
    this.age = 1;
}

Person.prototype.grow = function() {
    let that = this;

    setInterval(function() {
        console.log(that.age++);
    }, 2000);
}

new Person().grow();

//2.用箭頭函數(Arrow Function)重構
Person.prototype.grow = function() {
    setInterval(() => {
        console.log(this.age++);
    }, 2000);
}

new Person().grow();