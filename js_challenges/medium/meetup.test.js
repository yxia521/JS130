/*
Typically meetups happen on the same day of the week.

Examples of general descriptions are:

The first Monday of January 2017
The third Tuesday of January 2017
The wednesteenth of January 2017
The last Thursday of January 2017

The descriptors you are expected to parse are: 
first, second, third, fourth, fifth, last, monteenth, 
tuesteenth, wednesteenth, thursteenth, friteenth, saturteenth, sunteenth

Note that "Monteenth", "Tuesteenth", etc are all made up words. 
There was a meetup whose members realised that there are exactly 7 days that end in '-teenth'. 
Therefore, one is guaranteed that each day of the week (Monday, Tuesday, ...) 
will have exactly one date that is named with '-teenth' in every month.

Given examples of a meetup dates, each containing a month, day, year, 
and descriptor calculate the date of the actual meetup. 
For example, if given "The first Monday of January 2017", the correct meetup date is 2017/1/2.

Test suite:
*/

let meetupDay = require('./meetup.js');

describe("meetupDay()", () => {
  test("test monteenth of may 2013", () => {
    expect(meetupDay(2013, 4, "Monday", "teenth")).toEqual(
      new Date(2013, 4, 13)
    );
  });

  test("test saturteenth of february 2013", () => {
    expect(meetupDay(2013, 1, "Saturday", "teenth")).toEqual(
      new Date(2013, 1, 16)
    );
  });

  test("test first tuesday of may 2013", () => {
    expect(meetupDay(2013, 4, "Tuesday", "1st")).toEqual(new Date(2013, 4, 7));
  });

  test("test second monday of april 2013", () => {
    expect(meetupDay(2013, 3, "Monday", "2nd")).toEqual(new Date(2013, 3, 8));
  });

  test("test third thursday of september 2013", () => {
    expect(meetupDay(2013, 8, "Thursday", "3rd")).toEqual(
      new Date(2013, 8, 19)
    );
  });

  test("test fourth sunday of march 2013", () => {
    expect(meetupDay(2013, 2, "Sunday", "4th")).toEqual(new Date(2013, 2, 24));
  });

  test("test last thursday of october 2013", () => {
    expect(meetupDay(2013, 9, "Thursday", "last")).toEqual(
      new Date(2013, 9, 31)
    );
  });

  test("test last wednesday of february 2012", () => {
    expect(meetupDay(2012, 1, "Wednesday", "last")).toEqual(
      new Date(2012, 1, 29)
    );
  });

  test("test last wednesday of december 2014", () => {
    expect(meetupDay(2014, 11, "Wednesday", "last")).toEqual(
      new Date(2014, 11, 31)
    );
  });

  test("test last sunday of only four week february 2015", () => {
    expect(meetupDay(2015, 1, "Sunday", "last")).toEqual(new Date(2015, 1, 22));
  });

  test("test first friday of december 2012", () => {
    expect(meetupDay(2012, 11, "Friday", "1st")).toEqual(new Date(2012, 11, 7));
  });

  test("test fifth monday of march 2015", () => {
    expect(meetupDay(2015, 2, "Monday", "5th")).toEqual(new Date(2015, 2, 30));
  });

  test("test nonexistent fifth monday of february 2015", () => {
    expect(() => {
      meetupDay(2015, 1, "Monday", "5th");
    }).toThrow();
  });
});
