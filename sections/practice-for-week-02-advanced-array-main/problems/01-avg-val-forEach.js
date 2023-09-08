/*
Write a function `avgVal(arr)` that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty,
it should return `null`.

Solve this using Array's `forEach()` method.

Examples:

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

*/

let avgVal = function(arr) {
<<<<<<< HEAD
  let sum = 0;
  arr.forEach((val)=>{
      sum +=val;
    });
    return sum/arr.length;
=======
  let sum = 0;  
  arr.forEach((val)=>{
    sum+=val;
    });
  
  let avg = null;
  if (arr.length>0){
    avg = sum/arr.length;
  }
  return avg;
>>>>>>> e79ca4255b8f5a63e759a36a64a64dcd9ed01d37
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = avgVal;
} catch (e) {
  module.exports = null;
}
