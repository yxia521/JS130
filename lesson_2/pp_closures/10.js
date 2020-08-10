/*
The built-in Function.prototype.bind method performs partial function application by 
allowing you to specify some of the function's arguments when you invoke bind. 
It also permanently binds the new function to a specific execution context with its first argument. 
That binding is, in a sense, also an example of partial function application. 
Here, the "argument" we're applying to the function is the function's execution context.

Write a function that emulates the context binding aspect of bind. 
That is, your version of bind should merely call the function with the desired context; 
it doesn't need to pass any arguments to the function.
*/

"use strict";

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }

function bind(context, func) {
  return () => func.call(context);
}
