/*
Determine if a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length. 
(It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides have to be of length > 0, 
and the sum of the lengths of any two sides must be greater than or equal to the length of the third side.

Test suite:
*/

// need to install jest packages first locally

let Triangle = require('./triangle.js');

describe("Triangle", () => {
  test("equilateral triangles have equal sides", () => {
    const triangle = new Triangle(2, 2, 2);
    expect(triangle.kind()).toEqual("equilateral");
  });

  test("larger equilateral triangles also have equal sides", () => {
    const triangle = new Triangle(10, 10, 10);
    expect(triangle.kind()).toEqual("equilateral");
  });

  test("isosceles triangles have last two sides equal", () => {
    const triangle = new Triangle(3, 4, 4);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("isosceles trianges have first and last sides equal", () => {
    const triangle = new Triangle(4, 3, 4);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("isosceles triangles have two first sides equal", () => {
    const triangle = new Triangle(4, 4, 3);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("isosceles triangles have in fact exactly two sides equal", () => {
    const triangle = new Triangle(10, 10, 2);
    expect(triangle.kind()).toEqual("isosceles");
  });

  test("scalene triangles have no equal sides", () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("scalene triangles have no equal sides at a larger scale too", () => {
    const triangle = new Triangle(10, 11, 12);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("scalene triangles have no equal sides in descending order either", () => {
    const triangle = new Triangle(5, 4, 2);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("very small triangles are legal", () => {
    const triangle = new Triangle(0.4, 0.6, 0.3);
    expect(triangle.kind()).toEqual("scalene");
  });

  test("test triangles with no size are illegal", () => {
    const triangle = new Triangle(0, 0, 0);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  test("triangles with negative sides are illegal", () => {
    const triangle = new Triangle(3, 4, -5);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  test("triangles violating triangle inequality are illegal", () => {
    const triangle = new Triangle(1, 1, 3);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  test("triangles violating triangle inequality are illegal 2", () => {
    const triangle = new Triangle(7, 3, 2);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  test("triangles violating triangle inequality are illegal 3", () => {
    const triangle = new Triangle(10, 1, 3);
    expect(triangle.kind.bind(triangle)).toThrow();
  });
});
