let range = function _range(start, end) {
  if (start > end)
    return [];

  if (start === end)
    return [start];
  else
    return range(start, end - 1).concat([end]);
};

let sumRec = function _sumRec(arr) {
  if (arr.length === 0)
    return 0;
  // if (arr.length === 1)
  //   return arr[0];
  return arr[0] + sumRec(arr.slice(1));

};

const exponent1 = function _exponent1(base, exp) {
  // exp is an integer
  if (exp === 0)
    return 1;
  if (exp < 0)
    return 1 / exponent1(base, -exp);
  return base * exponent1(base, exp - 1);
};

const exponent2 = function _exponent2(base, exp) {
  if (exp === 0)
    return 1;
  if (exp < 0)
    return 1 / exponent2(base, -exp);
  // debugger;
  if ((exp % 2) === 0)
    return Math.pow(exponent2(base, (exp / 2)), 2);

  const newBase = exponent2(base, (exp - 1) / 2);

  return base * newBase * newBase;
};

const fibonacci = function _fibonacci(n) {
  let resultsArray = [];
  if (n === 0)
    return [0];
  if (n === 1)
    return [0, 1];
  let last = fibonacci(n - 1);
  return last.concat([last.slice(-1)[0] + last.slice(-2)[0]]);
};


// NOTES: 1. HAVE TO RETURN THE NEW BSEARCHS
// 2. DIVISION IN JAVASCRIPT IS FLOAT BY DEFAULT (RUBY IS INTEGER DIVISION)
const bsearch = function _bsearch(sorted, target) {
  if (sorted.length === 0)
    return -1;
  let midPoint = Math.floor(sorted.length / 2);
  if (sorted[midPoint] === target)
    return midPoint;
  else if (sorted[midPoint] > target)
    return bsearch(sorted.slice(0, midPoint), target);
  else
    return bsearch(sorted.slice(midPoint + 1), target);

};

// const bsearch = function _bsearch(sorted, target) {
//   bsearch_helper(0, sorted.length);
// };

// const bsearch_helper = function (start ,end) {
//   if (start === end && target !== sorted[start]) {
//
//   }
// }

// let func1 = function (x) {
//   let func2 = function () {
//     console.log(x);
//   };
//   func2()
// };
