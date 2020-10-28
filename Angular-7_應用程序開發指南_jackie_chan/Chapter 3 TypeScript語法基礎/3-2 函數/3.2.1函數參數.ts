//1. 參數的類型
function add(x: number, y: number) {
    return x + y;
}

//2. 可選參數
function register(name: string, password: string, age?: number) {
    console.log(`${name} ${password} ${age}`);
}

//3. 默認參數
function getBiggerHeight(height: number, unit: string = 'px') {
    return height * 2 + unit;
}

//4. 剩餘參數
function addContact(phone: string, ...address: string[]) {
    console.log();
}