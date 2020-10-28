//1. boolean
let areYouReady: boolean = true;

//2. number
let decimal: number = 6;
let fraction: number = 6.66;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//3. string
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

//4. Array
let array = new Array();
array.push(1);
array.push(2);
array.push('3');

let prices: Array<number> = new Array<number>();
prices.push(1);
prices.push(2);
//prices.push('3');

let cars: Array<string> = new Array<string>('BYD', 'EMW', '');
//let colors: Array<string> = {'red', 'green', 'blue'};

//5. Tuple
let heights: [number, string] = [20, '30px'];

function getPrice(): [boolean, number, string] {
    return [false, 0, 'error'];
}

let priceResult = getPrice();
console.log(priceResult[0]);
console.log(priceResult[1]);
console.log(priceResult[2]);

//6. enum
enum Sex {
    Female, // 0
    Male,   // 1
    Secret  // 2
}

enum SalaryLevel {
    Low = 1000,
    Middle = 10000,
    High = 100000
}

let sex: Sex = Sex.Female;
sex = Sex.Male;
let salaryLevel: SalaryLevel = SalaryLevel.High;
salaryLevel = SalaryLevel.Low;

//7. null和undefined
let job: null = null;
let hobby: undefined = undefined;

// job = 'dev';
// hobby = true;

// let address: string = null;
// address = undefined;
// let height: number = undefined;
// height = null;
// let skills: string[] = null;
// skills = undefined;

//8. any和unknown
let age2: any = 30;
age2 = null;
age2 = undefined;
age2 = '30.1';

//9. void
let girlFriend: void = undefined;

function findGirlFriend(): void {
    console.log('Just do IT');
}

//10. never
let bePeace: never;
// bePeace = true;
// bePeace 1000;
// bePeace = 'test';

function error(): never {
    throw 'error';
} 

function xiaoCaiQi(): never {
    while (true) {
        console.log('never stop')
    }
}