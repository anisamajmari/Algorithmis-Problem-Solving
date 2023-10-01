const assert = require("assert");
///// write a program that finds the largest of three numbers

function findLargestOfThree(first, second, third) {
  /// your code here, find the value and return it
  if(second >= first && second >= third){
    return second;
  }else if(third >= second && third >= first){
    return third;
  }else{
   return first;
  }
}

assert.equal(findLargestOfThree(1, 2, 3), 3);
assert.equal(findLargestOfThree(2, 3, 3), 3);
