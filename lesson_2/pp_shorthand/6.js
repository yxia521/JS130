// Rewrite the following code using classic JavaScript syntax:

function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

// rewrite

function product() { // Note that the new function definition has no parameters.
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
