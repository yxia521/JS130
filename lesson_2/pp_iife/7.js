/*
For an extra challenge, refactor the solution to problem 4 using recursion. 
Bear in mind that named functions created as IIFEs can be referenced by those same functions. 
That is, you can call use a function's name in the body of the IIFE. 
*/

/*
Consider the following code and output:

> countdown(7)
7
6
5
4
3
2
1
0
Replace the invocation of countdown with an IIFE that produces the same results
*/

(function recursiveCounter(num) {
  console.log(num);

  if (num !== 0) {
    recursiveCounter(num - 1);
  }
})(7);
