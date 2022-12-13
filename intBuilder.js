"use strict";
class IntBuilder extends Builder {
  constructor(property = 0) {
    super(property);
  }

  minus(...n) {
    this.property = n.reduce((res, minus) => (res -= minus), this.property);
    return this;
  }

  multiply(n) {
    this.property *= n;
    return this;
  }

  divide(n) {
    this.property /= n;
    return this;
  }

  mod(n) {
    this.property %= n;
    return this;
  }
}

const integerBuilder = new IntBuilder(10);
console.log(
  integerBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get()
);
