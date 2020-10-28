//參數的類型
//1.定義函式add, 帶參數x: number, y: number, 回傳x + y
function add(x: number, y: number) {
    return x + y;
}

//可選參數
//2.定義函式register, 帶參數name: string, password: string, age?: number, 回傳這三個參數用``包起來
function register(name: string, password: string, age?: number) {
    console.log(`${name} ${password} ${age}`);
}

//默認參數
//3.定義函式getBiggerHeight, 帶參數height: number, unit: string = 'px', 回傳height * 2 + unit
function getBiggerHeight(height: number, unit: string = 'px') {
    return height * 2 + unit;
}

//剩餘參數
//4.定義函式addContact, 帶參數phone: string, ...address: string[]
function addContact(phone: string, ...address: string[]) {
    console.log();
}