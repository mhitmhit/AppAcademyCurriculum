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
