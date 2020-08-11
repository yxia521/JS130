function primes(limit) {
  let range = [];

  for (let number = 2; number <= limit; number++) {
    range.push(number);
  }

  range.forEach(number => {
    if (number === 0) return;    // return means go to the next iteration

    let multiplier = 2;
    let multiple = number * multiplier;

    while (multiple <= limit) {
      if (range.indexOf(multiple) !== -1) { // means that the multiple is in the range
        range[range.indexOf(multiple)] = 0; // mark it as 0
      }

      multiplier++;
      multiple = number * multiplier;       // reassign multiple with increment multiplier
    }
  });

  return range.filter(num => num !== 0);
}

module.exports = primes;
