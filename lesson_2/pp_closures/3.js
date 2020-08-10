// Let's move the variable declaration into makeCounter now. 
// What do the 4 console.log statements at the end of this program print? 

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

/*
This time, counter gets initialized to 0 every time makeCounter is called,
the second call on line 17 restarts the counter.
*/
