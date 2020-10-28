var Calculator = /** @class */ (function () {
    function Calculator(maxOperand, minOperand) {
        this._precision = 2;
        this.maxOperand = maxOperand;
        this.minOperand = minOperand;
    }
    Object.defineProperty(Calculator.prototype, "precision", {
        get: function () {
            return this._precision;
        },
        enumerable: false,
        configurable: true
    });
    return Calculator;
}());
var calculator = new Calculator(100, -100);
console.log(calculator.precision);
console.log(calculator.maxOperand);
console.log(calculator.minOperand);
