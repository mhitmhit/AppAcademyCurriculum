// quick destructuring
let array = ["blue", "red", "yellow", "green", "pink"];

let [firstColor, secondColor] = array;

console.log(firstColor);
console.log(secondColor);
console.log("-----------------")

// destructuring objects, with aliasing in name1
let obj =   {   name:"sandy",
                instrument: ["guitar", "uke"]
            };

let {name:name1, instrument} = obj;

console.log(name1);
console.log(instrument);
console.log("-----------------")

// destructuring objects
let zooAnimals = {
    animalId:12,
    species:"hippo",
    favoriteFood: "watermelon",
    fullName:{
        fname: "Fiona",
        lname: "theCuteHippo"
    }
};

let { fullName: { fname } } = zooAnimals;
console.log(fname);
console.log("-----------------")

// destructuring in function parameters
function sayHelloName({ fullName: { fname: name } }){
    console.log("Hello to " + name);
}

sayHelloName( zooAnimals );
