// For Each
let myArray = [1,2,3,4,5];
let totalSales = 0;

let addToTotalSales = function (value, index) {
    // console.log("the value to add is:" + value);
    // console.log("the index of the value is:" + index);
    totalSales+=value;
};

myArray.forEach(addToTotalSales);
console.log(totalSales);


// MAP
let myArray1 = [1,2,3,4,5];
let mappedArray1 = myArray1.map(
    function(value){
        return value+5;
    }
);
console.log(mappedArray1);


// Filter
let myArray2 = [1,2,3,4,5,6,7,8,9];
let filteredArray2 = myArray2.filter(
    function(value){
        return value > 4;
    }
);
console.log(filteredArray2);



// Reduce
const numbers = [0, 1, 2, 3, 10];
const initialValue = 0;
const theSum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, initialValue);

console.log(theSum);
