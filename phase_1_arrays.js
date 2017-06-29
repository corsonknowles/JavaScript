Array.prototype.uniq = function () {
  const newArray = [];
  this.forEach(function(item) {
    if (!newArray.includes(item))
      newArray.push(item);
  });

  return newArray;
};

Array.prototype.twoSum = function () {
  const newArray = [];
  // const testArray = this.map((x) => -x);
  const arrayLength = this.length;
  for (let i = 0; i < arrayLength; i++ ) {
    for (let j = i + 1; j < arrayLength; j ++) {
      if ( this[i] + this[j] === 0 )
        newArray.push([i, j]);
    }
  }
  return newArray;
};

let arr = [1, 0, -1];


Array.prototype.twoSum2 = function () {
  const newArray = [];
  const testArray = this.map((x) => -x);
  testArray.forEach(function(item1, idx1) {
    testArray.forEach(function(item2, idx2) {
      if (idx1 > idx2 && item1 === item2)
        newArray.push([idx1, idx2]);
    });
  });
  return newArray;
};

// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original Array


Array.prototype.transpose = function () {
  const newArray = [];
  let arrayLength = this.length;
  let arrayWidth = this[0].length;
  for (let i = 0; i < arrayWidth; i++) {
    let newRow = [];
    for (let j = 0; j < arrayLength; j++) {
        newRow.push(this[j][i]);
    }
    newArray.push(newRow);
  }
  return newArray;
};

const mat = [[1,2,3],
             ['a', 'b', 'c'],
             [7,8,9]];
