// Create a function myBind, that accepts two arguments: 1) The function to bind, 
// 2) The context object, and returns a new function that's hard-bound to the passed in context object.

function myBind(context, func) {
  return function() {
    func.call(context); // my solution doesn't allow for additional arguments
  };
}

// test case
let obj = {name: 'Birdie'};
function sayName() {
  console.log(obj.name);
}

let newFunc = myBind(obj, sayName);
newFunc();

// --- ls sol ---

function myBind(context, func) {
  return function() {
    return func.apply(context, argsArray); // Pass argsArray in case the function has arguments
  };
}

// arrow functions

function myBind(context, func) {
  return (...argsArray) => {    // Note that arrow functions don't take array as arguments, so use rest syntax
    func.apply(context, argsArray);
  };
}
