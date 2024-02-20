function arrMin(arr){
  let min = Infinity;
  for (let i = 0; i < arr.length; i++){
      if (arr[i] < min){
          min = arr[i]
      }
  } return min
}
function arrMax(arr){
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++){
      if (arr[i] > max){
          max = arr[i]
      }
  } return max
}

function luckyNumbers(matrix){
  let lucky = [];
  for (col = 0; col < matrix[0].length; col++){
      let subCol = [];
      let subRow = [];
      for (row = 0; row < matrix.length; row++){
          subRow.push(matrix[row][col]);
      }
      for (row = 0; row < matrix.length; row++){
        console.log("row: " +row);
        console.log("col: " +col);
          subCol.push(matrix[col][row])
      }
      console.log(subRow);
      console.log(subCol);
      if (arrMin(subRow) === arrMax(subCol)){
          lucky.push(arrMin(subRow))
      }
  }




  return lucky;
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]


//console.log(luckyNumbers(matrix)); // [12]


matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]
