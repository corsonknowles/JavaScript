

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i ++ ) {
    for (let j = i + 1; j < this.length; j ++ ) {
      if (this[i] > this[j]) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};


Array.prototype.bubbleSort2 = function () {
  let swaps = true;
  let i = 0;
  while (swaps) {
    swaps = false;
    while ( i < this.length - 1) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        swaps = true;
      }
    }
  }
  return this;
};
const arrayLarge = [1,2,3,4,4,5,2,1,122,34,4,5,56,6,67,7,7,7,7,8,3,3,22,2,2,44,5,6,6,4,3,3,34,5];

String.prototype.subStrings = function () {
  const subs = [];
  for (let i = 1; i <= this.length; i++) {
    for (let j = 0; j <= this.length - i; j++) {
      subs.push(this.slice(j, j+i));
    }
  }
  return subs;
};

const str = 'abcdefg';



// Phase 3: Iteration Instructions
// Write the following functions:
//
// Array#bubbleSort - receives an array, returns a sorted array by implementing [bubble sort][bubble sort] sorting algorithm
// String#substrings - receives a string, returns an array of all substrings
// Recap
//
// These implementations should be almost identical to those we created in Ruby. Sadly, there is no parallel assignment in JavaScript, but we do get that really cool ++ operator.
