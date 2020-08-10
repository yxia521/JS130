/*
Our earlier implementation of Function.prototype.bind as myBind was simplistic. 
Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. 
It's called partial function application
Alter the myBind function written in the previous exercise to support partial function application.
*/

// Previously

function myBind(context, func) {
  return function() {
    return func.apply(context, argsArray);
  };
}

// Partial Function Application:

function myBind(func, context) {
  let presetArgs = [].slice.apply(arguments, [2]); // Key: make the preset arguments private data

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = presetArgs.concat(remainingArgs);

    return func.apply(context, fullArgs);
  };
}

// test case

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15

// arrow function:

const myBind = (func, ctx, ...args) => {
  let presetArgs = args;

  return (...restArgs) => {
    let remainingArgs = restArgs
    let fullArgs = presetArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  }
}

/*
The key here is visualizing what happens to the arguments when myBind is called and when the bound function is eventually called. 
The first thing to visualize is when myBind is executed, it creates the presetArgs array. 
This array contains the pre-specified initial arguments.
Next, when the bound function is called, the remaining arguments are then concatenated with the presetArgs. 
Notice that the key here is to cache the initial set of arguments and have it accessible via the closure formed by myBind.
With the complete args, the solution again leverages Function.prototype.apply to execute the function passed to myBind with its this set to ctx.
*/

