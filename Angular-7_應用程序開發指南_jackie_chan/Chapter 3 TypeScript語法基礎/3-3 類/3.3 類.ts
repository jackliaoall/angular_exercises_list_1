class Calculator {
    _precision: number = 2;
    maxOperand: number;
    minOperand: number;

    get precision():　number {
        return this._precision;
    }

    set precision(value: number) {
        this._precision = value;
    }

    constructor(maxOperand: number, minOperand: number) {
        this.maxOperand = maxOperand;
        this.minOperand = minOperand;
    }
}

let calculator = new Calculator(100, -100);
console.log(calculator.precision);
console.log(calculator.maxOperand);
console.log(calculator.minOperand);