class Luhn {
  constructor(numStr) {
    this.numStr = numStr;
  }

  doubleNum(num) {
    let doubleNum = num * 2;
    if (doubleNum > 9) {
      doubleNum -= 9;
    }
    return doubleNum;
  }

  valid() {
    let noSpace = this.numStr.replace(/\s+/g, '');
    if (noSpace.length <= 1 || noSpace.match(/\D/g)) return false;
    
    let strippedStr = this.numStr.match(/[0-9]/g).join('');
    let newNumArr = [];

    for (let idx = 0; idx < strippedStr.length; idx++) {
      if (strippedStr.length % 2 === 0) {
        if (idx % 2 === 0) {
          let doubleNum = this.doubleNum(Number(strippedStr[idx]));
          newNumArr.push(doubleNum);
        } else {
          newNumArr.push(Number(strippedStr[idx]));
        }
    } else {
      if (idx % 2 !== 0) {
        let doubleNum = this.doubleNum(Number(strippedStr[idx]));
        newNumArr.push(doubleNum);
      } else {
        newNumArr.push(Number(strippedStr[idx]));
      }
    }
  };
    let sum = newNumArr.reduce((sum, num) => sum + num);
    return sum % 10 === 0;
  }
}

module.exports = Luhn;

/*

if id length is odd, 05976
  - the number we double is 5, 7, whose index 1, 3 - odd index, starting from 1

if id length is even, 059768
  - the number we double is 0, 9, 6, whose index 0, 2, 4 - even index, starting from 0

*/
