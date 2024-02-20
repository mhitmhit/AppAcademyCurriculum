// closure to make variables private:
            // counter variable is a closure.
function createCounter() {
    let count = 0;

    return function() {
                count++;
                return count;
    };
  }

  let counter = createCounter();
  console.log(counter()); // => 1
  console.log(counter()); // => 2





// use of closures to pass arguments implicitly

  function isPalindrome(string) {
    function reverse() {
      return string
        .split("")
        .reverse()
        .join("");
    }

    return string === reverse();
  }
function createCounter(){
    let count =0;
    return function (){
        count++;
        return count;
    };
}

let counter1 = createCounter();

console.log(counter1);          //[Function (anonymous)]
console.log(counter1());        // 1
console.log(counter1());        // 2

function pizzaMaker(topping){
    let order = "i want a pizza with ";
    function oven(){
        return order + topping;
    };

    return oven;
}

let order1 = pizzaMaker("onions");

console.log(order1());          //error order1() is not a function
console.log(order1);            // "i want a pizza with onions"
