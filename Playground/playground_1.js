// function stringConverter(string) {
//   // Your code here
//   let stringObject = {};
//   let objectArray = [];

//   for (i=0; i<string.length; i++){
//     objectArray = Object.keys(stringObject);
//     console.log("object aray is" + objectArray);
//     if (objectArray.includes(string[i])){
//       stringObject[string[i]] = stringObject[string[i]] + 1;
//     }else{
//       stringObject[string[i]] = 1;
//     }
//   }
//   return stringObject;
// }


// console.log(stringConverter("test"));


let addFive = value => value + 5;

console.log(addFive(5));
