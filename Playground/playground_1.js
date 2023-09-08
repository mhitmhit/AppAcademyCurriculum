let maxWithReduce = function(nums) {
  // Your code here
  return nums.reduce((a,c)=>{
    if (a < c){
      return c;
    }
  });
};

console.log(maxWithReduce([1,2,3,4]));
