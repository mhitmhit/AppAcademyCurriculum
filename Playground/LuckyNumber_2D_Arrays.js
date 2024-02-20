function luckyNumbers(matrix) {
  // lowest values in all rows array
  let minValueArray = matrix.map(element => {return Math.min(...element);});

  // max in column in all columns
  let matrixTranspose = matrix[0].map((col, i) => matrix.map(row => row[i]));
  let maxValueArray = matrixTranspose.map(element => {return Math.max(...element);});

  // if minValue = maxValue, lucky number.
  let luckyNumber;
  for (i=0; i<minValueArray.length; i++){
    if (maxValueArray.indexOf(minValueArray[i]) !=-1){
      luckyNumber = minValueArray[i];
    }
  }

  return luckyNumber;
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]


console.log(luckyNumbers(matrix)); // [12]


matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
