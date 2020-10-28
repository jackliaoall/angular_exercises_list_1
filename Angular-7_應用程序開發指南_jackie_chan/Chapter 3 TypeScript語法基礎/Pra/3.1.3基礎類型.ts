//boolean
//1.用let定義areYouReady為boolean值true
let areYouReady: boolean = true;

//number
//2.用let定義decimal為number值6
let decimal: number = 6;

//string
//3.打出底下的程式碼即可
let firstName: string = "L";
let lastname: string = 'cng';

let age: number = 100;
let nameAndAge: string = firstName + lastname + age;
console.log(nameAndAge);

let greet: string = `Hi, every body.
My name is ${firstName +  lastname}.
I am ${age} years old..
`;
console.log(greet);

//Array
//4.用let定義array, 產生陣列(new Array())
//並push 1, 2, '3'
let array = new Array();
array.push(1);
array.push(2);
array.push('3');

//5.用let定義prices, 產生陣列(new Array<number>())
//並push 1, 2, '3'
let prices: Array<number> = new Array<number>();
prices.push(1);
prices.push(2);
//prices.push('3');

//6.用let定義cars, 產生陣列(new Array<string>())
//並push 'BYD', 'EMW', ''
let cars: Array<string> = new Array<string>('BYD', 'EMW', '');
//let colors: Array<string> = {'red', 'green', 'blue'};

//Tuple
//7.用let定義heights, 型態為[number, string], 給值為[20, '30px']
let heights: [number, string] = [20, '30px'];

//8.定義函式getPrice, 回還值為[boolean, number, string], 在函式內回傳[false, 0, 'error']
function getPrice(): [boolean, number, string] {
    return [false, 0, 'error'];
}

//9.用let定義priceResult去接getPrice(), 並打印出priceResult的3個值
let priceResult = getPrice();
console.log(priceResult[0]);
console.log(priceResult[1]);
console.log(priceResult[2]);

//enum
//10.打出底下的程式碼即可
enum Sex {
    Female, // 0
    Male,   // 1
    Secret  // 2
}

//11.用let定義sex去接Sex.Male或Sex.Female...
let sex: Sex = Sex.Female;
sex = Sex.Male;

//null和undefined
//12.用let定義job為:null = null, hobby為undefined = undefined
let job: null = null;
let hobby: undefined = undefined;

//any和unknown
//13.用let定義age2為any給值為30, 之後再分別給值為null undefined '30.1'
let age2: any = 30;
age2 = null;
age2 = undefined;
age2 = '30.1';

//void
//14.用let定義girlFriend為:void = undefined
let girlFriend: void = undefined;

//15.定義函式findGirlFriend回傳值為void
function findGirlFriend(): void {
    console.log('Just do IT');
}

//never
//16.用let定義bePeace為never, 之後再分別給值為true 1000 'test'
let bePeace: never;
// bePeace = true;
// bePeace 1000;
// bePeace = 'test';

//17.定義函式error回傳值為never, 並throw 'error'
function error(): never {
    throw 'error';
} 