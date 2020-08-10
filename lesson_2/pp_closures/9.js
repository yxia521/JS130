/*
Write a function named later2 that takes two arguments: a function and an argument for that function. 
The return value should be a new function that also takes an argument. 
The new function should call the input function with the argument provided to later2 and 
the argument provided to the returned function.
*/

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

function later2(func, message) {
  return timeLeft => func(message, timeLeft);
}
