// Write a function named startCounting that logs a number to the console every second, starting with 1. 
// Each output number should be one greater than the previous one.

function startCounting() {
  for (let interval = 1; ;interval += 1) {
    setInterval(() => console.log(interval), interval * 1000);
  }
}

startCounting();

