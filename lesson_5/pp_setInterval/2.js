// Write a function named startCounting that logs a number to the console every second, starting with 1. 
// Each output number should be one greater than the previous one.
// run with node REPL

function startCounting() {
  let count = 1;
  let counterId = setInterval(() => {
    console.log(count);
    count += 1;
  }, 1000);

  return counterId;
}

// Extend the code from the previous problem with a stopCounting function that stops the logger when called.

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counterId = startCounting();
// some time later
stopCounting(counterId);
