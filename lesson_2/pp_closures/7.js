/*
Without running the following code, determine what value it logs on the last line. 
Explain how the program arrived at that final result.
*/

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3); // Even though prod is out of scope when we call bar, closure lets bar retain access to prod.
result += bar(4);
result += bar(5);
console.log(result);

// 150

/*
Function foo is used to set initial value for prod.
When we keep calling bar, the value of prod keep updated, based on the previous call.
Since we only call function bar afterward, we didn't reset prod to any other values.
*/
