let arr=[1,2,3,4,5,4,7,8];
let arr1=[1,2,3,[4,8,12],6,7,8,9,10]
let arr2=[1,2,3,4,"abc","xyz",8,10]

/*Write a function filterNumbers(arr) that returns only numbers from a mixed array*/
function filterNumbers(arr) {
    return arr.filter((item)=> typeof item === 'number');
  }
/*Write a function reverseArray(arr) that reverses the array*/  
  function reverseArray(arr) {
    return arr.reverse();
  }
/*Write a function findMax(arr) that returns the largest number in the array*/
  function findMax(arr) {
    return Math.max(...arr);
  }
/*Write a function removeDuplicates(arr) that returns a new array with all duplicates removed*/ 
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
/*Write a function flattenArray(arr) that takes a nested array and returns a single flattened array*/
// The flat() method of Array instances creates a new array 
// with all sub-array elements concatenated into it recursively up to the specified depth.
  function flattenArray(arr) {
    return arr.flat(Infinity);
  }
  
console.log(filterNumbers(arr2));

console.log(reverseArray(arr));

console.log(findMax(arr));

console.log(removeDuplicates(arr));

console.log(flattenArray(arr1));

