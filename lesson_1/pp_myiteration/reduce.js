let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));        // => undefined
 

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

function reduce(arr, callback, init) {
  let accumulator;
  let index = 0;

  if (init) {     // take initialValue argument
    accumulator = init;
  } else {        // not take initialValue argument
    accumulator = arr[0];
    index = 1;
  }

  while (index < arr.length) {
    accumulator = callback(accumulator, arr[index]);
    index += 1;
  }

  return accumulator;
}
