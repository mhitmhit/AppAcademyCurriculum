function printObject(obj) {
    // let keysArray = Object.keys(obj);
    // let valueArray = Object.values(obj);
    // for (i=0;i<keysArray.length;i++){
    //     console.log(keysArray[i] + "-" + valueArray[i]);
    // }

    for (key in obj){
        console.log( key + '-' + obj[key]);
    }

  }

  let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
  };

  printObject(bootcamp); // prints
  // name - App Academy
  // color - Red
  // population - 120
