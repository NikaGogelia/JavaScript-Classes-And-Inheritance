"use strict";
class Builder {
  constructor(prop) {
    this.property = prop;
  }

  plus(...n) {
    this.property = n.reduce((res, plus) => (res += plus), this.property);
    return this;
  }

  get() {
    return this;
  }
}
