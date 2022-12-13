"use strict";
StringBuilder.prototype = Builder.prototype;

function StringBuilder(property = "") {
  this.property = property;
}

StringBuilder.prototype.minus = function (n) {
  this.property = this.property.substring(0, this.property.length - n);
  return this;
};

StringBuilder.prototype.multiply = function (n) {
  this.property = this.property.repeat(n);
  return this;
};

StringBuilder.prototype.divide = function (n) {
  this.property = this.property.slice(0, Math.floor(this.property.length / n));
  return this;
};

StringBuilder.prototype.remove = function (str) {
  this.property = this.property.split(str).join("");
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.property = this.property.substring(from, from + n);
  return this;
};

const stringBuilder = new StringBuilder("Hello");
console.log(
  stringBuilder
    .plus(" all", "!")
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove("l")
    .sub(1, 1)
    .get()
);
