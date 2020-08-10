// Let's modify our program a little by moving the let statement into the function returned by makeCounter. 
// What do the 4 console.log statements at the end of this program print?

function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 1

incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 1
 

/* 
Since counter is declared and initialized in the function returned by makeCounter,
closure plays no part in its execution. Instead, counter gets created and initialized
to 0 each time we call incrementCounter.
*/
