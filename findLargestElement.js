/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  */

function largestElement(arr) 
{
    return Math.max(...arr);
}

const num1 = [10, 15, 28, 20, 13];
const result = largestElement(num1);

console.log("The largest element in the array is:" + result); 
