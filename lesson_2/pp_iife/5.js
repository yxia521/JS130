// Is the named function inside in this IIFE accessible in the global scope?

(function foo() {
  console.log('Bar');
})();

foo() // ReferenceError: foo is not defined

// No. Even though the function is named, it isn't visible outside of the scope created by the IIFE.
