/*
Write a function named later that takes two arguments: a function and an argument for that function. 
The return value should be a new function that calls the input function with the provided argument,
*/

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

function later(logger, message) {
  return () => logger(message);
}

/*
In this code, we use partial function application to create a new function that 
doesn't need a message every time we call it.
*/
