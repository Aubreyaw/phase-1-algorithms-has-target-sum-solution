
function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}



/* 
  Write the Big O time complexity of your function here
  Runtime: O(n)
*/

/* 
Add your pseudocode here

create an object to keep track of objects already seen
  iterate through each number in the array
    for the current num, identify a complement that adds up to the target (comp = target - num)
    check if any key on our object is the complement 
      if so, return true 
      otherwise, add that number to the object

Hash map example creates an object to hold numbers that have been iterated over

  hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true, // the next number in the array is the/a complement to the number 2, which has been seen, and now the hasTargetSum can return true
  }

// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         return true;
//       }
//     }
//   }
//    return false;
// }


*/


/*
  const seenNumbers = {} creates an empty object to hold the numbers that have already been iterated over in the for loop
  The for loop iterates through each number in the array
  Each number is subtracted from the target using const complement = target - number to find a complement, 
  when added to the current number, would equal the target
  (complement in seenNumbers) checks if the complement already exists in the seenNumbers object 
  If so, a pair of numbers has been found that adds up to the target, so the function returns true.
  If the complement is not found, the current number is added to the seenNumbers object
  if the loop finishes without finding a pair of numbers that add up to the target number, it returns false 
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
