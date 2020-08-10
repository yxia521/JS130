// 1. Will the following code execute without error? 
// Try to answer without running it.

function() {
  console.log("Sometimes, syntax isn't intuitive!");
}();

// No, it won't execute. Instead, it raises a syntax error.
// A function declaration must be converted to a function expression 
// before you can invoke it with immediate invocation syntax.

// 2. rewrite:

(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// work but bad example:

(function() {
  console.log("Sometimes, syntax isn't intuitive!");
}());

// work but bad example:

let anyname = (function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();
