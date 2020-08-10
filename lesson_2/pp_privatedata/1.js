let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2

function makeCounterLogger(firstNum) {
  let init = firstNum;

  return (secondNum) => {
    if (firstNum < secondNum) {
      while (firstNum <= secondNum) {
        console.log(firstNum);
        firstNum += 1;
      }
    } else {
      firstNum = init;
      while (firstNum >= secondNum) {
        console.log(firstNum);
        firstNum -= 1;
      }
    }
  };
}
