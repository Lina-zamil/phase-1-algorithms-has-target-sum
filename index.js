function hasTargetSum(array, target) {
  // Write your algorithm here
  //1.iterate throgth the outer array with variale i=0 till i<array.length-1
  for (let i = 0; i < array.length - 1; i++)
    //2.iterate throgth the inner array with variale j=i+1 till i<array.length
    for (let j = i + 1; j < array.length; j++) {
      //if (array[i]+array[j]===target) return ture else return false
      if (array[i] + array[j] === target)
        return true
    }
  return false
}



/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  1.iterate throgth the outer array with variale i=0 till i<array.length-1
  2.iterate throgth the inner array with variale j=i+1 till j<array.length
 (because we skipped the first integer in the array and started at index=1)
  3.if (array[i]+array[j]===target) 
    return true
  else  
  return false
 */

/*
  Add written explanation of your solution here
  write a function with 2 argumants : `array`  & `target`
  if the sum of any 2 numbers in the array equals the target  
  return true otherwise return false 
 
  examples:
  ([1,2,3,5],5)=> true: 1,2  &  2,3  & 5,[]
  ([3,10,11],12)=> false
  ([5],5)=>true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
