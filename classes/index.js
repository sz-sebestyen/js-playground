"use strict";

class GetThis {
  constructor() {
    this.secret = "You got me!";
  }

  prop = "prop";

  method() {
    return this;
  }

  arrowFunc = () => {
    return this;
  };

  func = function () {
    return this;
  };
}

GetThis.prototype.protArrowFunc = () => {
  return this;
};

GetThis.prototype.protFunc = function () {
  return this;
};

const secretStore = new GetThis();

const method = secretStore.method;
const arrowFunc = secretStore.arrowFunc;
const func = secretStore.func;
const protArrowFunc = secretStore.protArrowFunc;
const protFunc = secretStore.protFunc;

console.log("method: ", method());
console.log("arrowFunc: ", arrowFunc());
console.log("func: ", func());
console.log("protArrowFunc: ", protArrowFunc());
console.log("protFunc: ", protFunc());
