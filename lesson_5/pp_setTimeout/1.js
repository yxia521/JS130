/*
Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, 
and logs each number after that number of seconds. 
It should log 1 after 1 second, 2 after 2 seconds, and so on.


> delayLog();
1  // 1 second later
2  // 1 second later (2 seconds after start)
3  // 1 second later (3 seconds after start)
4  // etc...
5
6
7
8
9
10

*/

function delayLog() {
  for (let num = 1; num < 11; num += 1) {
    setTimeout(() => console.log(num), num * 1000);
  }
}

delayLog();

/*
Explanation:

The 1 second intervals come about because the loop runs very quickly - 
in a matter of milliseconds, it sets up 10 individual delayed function invocations that
execute 1 second later, 2 seconds later, 3 seconds later, and so on - all based on when the loop ran. 
Thus, the first message gets displayed one second after the loop starts, 
the second message gets display two seconds after the loop starts, and so on.
*/
