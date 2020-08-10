/*
In our solution for the previous problem, what do you think would happen if 
you replaced let delay with var delay? Go ahead and try it and see if 
you can explain the difference in behavior.
*/

function delayLog() {
  for (var delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}
delayLog();

/* 

11  // 1 second later
11  // 1 second later (2 seconds after start)
11  // 1 second later (3 seconds after start)
11
11
11
11
11
11
11


The issue here is that a var declaration has function scope, 
so the loop uses the same delay variable with each iteration. 
Due to closure, each invocation of the callback function sees the current state of the delay variable. 
Since the callback doesn't get called until long after the loop finishes, 
it gets the final value of delay, e.g., 11.

Since let has block scope, each iteration in solution to the previous problem 
forms a closure with a different variable. 
Thus, each callback's closure encloses a different delay variable.

*/
