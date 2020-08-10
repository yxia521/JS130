// Consider the following code:
// Without running this code, what will it display? Explain your reasoning.

var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo(); // Bye


// rewrite:

function foo() {
  console.log("Hello");
}

foo = function() {   // override
  console.log("Bye");
}

foo();
