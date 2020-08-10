/*
Write a function named makeMultipleLister that you can call with a number as an argument. 
The function should return a new function that, when invoked, 
logs every positive integer multiple of that number less than 100. 
*/

function makeMultipleLister(number) {
  return () => {
    for (let multiple = number; multiple < 100; multiple += number) {
      console.log(multiple);
    }
  };
}

let lister = makeMultipleLister(17);
lister();

// 17
// 34
// 51
// 68
// 85
