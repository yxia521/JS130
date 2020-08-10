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

(function(num) {
  for (let count = num; count >= 0; count -= 1) {
    console.log(count);
  }
})(7);
