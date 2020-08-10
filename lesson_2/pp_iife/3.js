var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers);  // ?

/*
Why does this code produce an error? Correct the problem by using an IIFE.

The last line in the example shows a variable naming conflict. 
We intend to invoke the sum function we declared on line 9, 
but sum actually references the variable defined on line 1. 
Since the variable doesn't reference a function, our code throws a TypeError when we try to invoke one.
By using IIFE, we don't need to name that function. Thus, preventing the issue.
*/

// IIFE
sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum); // 49

// Note that, in the original code, we use var to declare the sum variable. 
// If we use let, JavaScript won't let us redefine the name as a function. 
// We could change var to let in the solution, but we didn't.

