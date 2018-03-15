class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.expression = String(initialValue);
  }

  add(number) {
    // your implementation
    this.expression += '+' + String(number);
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.expression += '-' + String(number);
    return this;
  }

  multiply(number) {
    // your implementation
    this.expression += '*' + String(number);
    return this;
  }

  devide(number) {
    // your implementation
    this.expression += '/' + String(number);
    return this;
  }

  pow(number) {
    // your implementation
    this.expression += '**' + String(number);
    return this;
  }

  valueOf() {
    return eval(this.expression);
  }
}

module.exports = SmartCalculator;