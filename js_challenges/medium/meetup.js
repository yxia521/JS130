function findDaysInAMonth(givenYear, givenMonth) {
  let nextMonthDate = new Date(givenYear, givenMonth + 1, 1); // find the first day of next month
  return new Date(nextMonthDate - 1).getDate();               // find total numbers of days of current month
}

function rangeOfDays(when, daysInAMonth) {
  switch (when) {
    case 'teenth':
      return [13, 19];
    case '1st':         // 1st week of a month
      return [1, 7];    // day starts from 1, ends at 7
    case '2nd':         // 2nd week of a month
      return [8, 14];
    case '3rd':
      return [15, 21];
    case '4th':
      return [22, 28];
    case '5th':
      return [29, 31];
    case 'last':        // last 7 days of a month
      return [daysInAMonth - 6, daysInAMonth];
  }
}

function meetupDay(givenYear, givenMonth, day, when) {
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let daysInAMonth = findDaysInAMonth(givenYear, givenMonth);
  let [ start, end ] = rangeOfDays(when, daysInAMonth); // array destructing
  
  while (start <= end) {
    let currentDate = new Date(givenYear, givenMonth, start);
    let currentDay = DAYS[currentDate.getDay()];

    if (start > daysInAMonth) {
      throw new Error();
    }

    if (currentDay === day) {
      return currentDate; // an object
    }

    start++;
  }

  throw new Error(); // means that we never pass a valid date and comes to this step, which should raise an error
}

module.exports = meetupDay;
