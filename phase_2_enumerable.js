// Phase 2

let arr2 = [1, 0, -1];

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback2) {
  let newArray = [];
  let shovelFunction = function (x) {
    newArray.push(callback2(x));
  };
  this.myEach(shovelFunction);
  return newArray;
};

let newArr = arr2.myMap(
  function (x) {return (x * 2);}
);

Array.prototype.myReduce = function (callback3, initialValue) {
  let accum;
  const newArray = initialValue ? this : this.slice(1);
  if (arguments[1] === undefined) {
    accum = this[0];
  } else {
    accum = initialValue;
  }
  let acc = accum;
  const accFunction = function (el) {
    acc = callback3(acc, el);
  };
  newArray.myEach(accFunction);
  return acc;
};
