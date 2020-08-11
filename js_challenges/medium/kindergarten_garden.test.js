/*
The kindergarten class is learning about growing plants. 
The teachers thought it would be a good idea to give them actual seeds, plant them in actual dirt, and grow actual plants.

They've chosen to grow grass, clover, radishes, and violets.

To this end, they've put little styrofoam cups along the window sills, and planted one type of plant in each cup, 
choosing randomly from the available types of seeds.

[window][window][window]
........................ // each dot represents a styrofoam cup
........................

There are 12 children in the class:

Alice, Bob, Charlie, David,
Eve, Fred, Ginny, Harriet,
Ileana, Joseph, Kincaid, and Larry.

Each child gets 4 cups, two on each row. The children are assigned to cups in alphabetical order.

The following diagram represents Alice's plants:

[window][window][window]
VR......................
RG......................

So in the row nearest the window, she has a violet and a radish; in the row behind that, she has a radish and some grass.

Your program will be given the plants from left-to-right starting with the row nearest the windows. 
From this, it should be able to determine which plants belong to which students.

For example, if it's told that the garden looks like so:

[window][window][window]
VRCGVVRVCGGCCGVRGCVCGCGV
VRCCCGCRRGVCGCRVVCVGCGCV

Then if asked for Alice's plants, it should provide:
Violets, radishes, violets, radishes

While asking for Bob's plants would yield:
Clover, grass, clover, clover

Test suite:
*/

let Garden = require('./kindergarten_garden.js');

describe("Garden", () => {
  test("for Alice", () => {
    expect(new Garden("RC\nGG").alice).toEqual([
      "radishes",
      "clover",
      "grass",
      "grass"
    ]);
  });

  test("another for Alice", () => {
    expect(new Garden("VC\nRC").alice).toEqual([
      "violets",
      "clover",
      "radishes",
      "clover"
    ]);
  });

  test("for Bob", () => {
    expect(new Garden("VVCG\nVVRC").bob).toEqual([
      "clover",
      "grass",
      "radishes",
      "clover"
    ]);
  });

  test("for Bob and Charlie", () => {
    const garden = new Garden("VVCCGG\nVVCCGG");
    expect(garden.bob).toEqual(["clover", "clover", "clover", "clover"]);
    expect(garden.charlie).toEqual(["grass", "grass", "grass", "grass"]);
  });
});

describe("Full garden", () => {
  const diagram = "VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV";
  const garden = new Garden(diagram);

  test("for Alice", () => {
    expect(garden.alice).toEqual([
      "violets",
      "radishes",
      "violets",
      "radishes"
    ]);
  });

  test("for Bob", () => {
    expect(garden.bob).toEqual(["clover", "grass", "clover", "clover"]);
  });

  test("for Charlie", () => {
    expect(garden.charlie).toEqual(["violets", "violets", "clover", "grass"]);
  });

  test("for David", () => {
    expect(garden.david).toEqual(["radishes", "violets", "clover", "radishes"]);
  });

  test("for Eve", () => {
    expect(garden.eve).toEqual(["clover", "grass", "radishes", "grass"]);
  });

  test("for Fred", () => {
    expect(garden.fred).toEqual(["grass", "clover", "violets", "clover"]);
  });

  test("for Ginny", () => {
    expect(garden.ginny).toEqual(["clover", "grass", "grass", "clover"]);
  });

  test("for Harriet", () => {
    expect(garden.harriet).toEqual([
      "violets",
      "radishes",
      "radishes",
      "violets"
    ]);
  });

  test("for Ileana", () => {
    expect(garden.ileana).toEqual(["grass", "clover", "violets", "clover"]);
  });

  test("for Joseph", () => {
    expect(garden.joseph).toEqual(["violets", "clover", "violets", "grass"]);
  });

  test("for Kincaid", () => {
    expect(garden.kincaid).toEqual(["grass", "clover", "clover", "grass"]);
  });

  test("for Larry", () => {
    expect(garden.larry).toEqual(["grass", "violets", "clover", "violets"]);
  });
});

describe("Disordered class", () => {
  const diagram = "VCRRGVRG\nRVGCCGCV";
  const students = ["Samantha", "Patricia", "Xander", "Roger"];
  const garden = new Garden(diagram, students);

  test("Patricia", () => {
    expect(garden.patricia).toEqual([
      "violets",
      "clover",
      "radishes",
      "violets"
    ]);
  });

  test("Roger", () => {
    expect(garden.roger).toEqual(["radishes", "radishes", "grass", "clover"]);
  });

  test("Samantha", () => {
    expect(garden.samantha).toEqual(["grass", "violets", "clover", "grass"]);
  });

  test("Xander", () => {
    expect(garden.xander).toEqual(["radishes", "grass", "clover", "violets"]);
  });
});

describe("Two gardens, different students", () => {
  const diagram = "VCRRGVRG\nRVGCCGCV";
  const garden1 = new Garden(diagram, ["Alice", "Bob", "Charlie", "Dan"]);
  const garden2 = new Garden(diagram, ["Bob", "Charlie", "Dan", "Erin"]);

  test("Bob and Charlie for each garden", () => {
    expect(garden1.bob).toEqual(["radishes", "radishes", "grass", "clover"]);
    expect(garden2.bob).toEqual(["violets", "clover", "radishes", "violets"]);
    expect(garden1.charlie).toEqual(["grass", "violets", "clover", "grass"]);
    expect(garden2.charlie).toEqual([
      "radishes",
      "radishes",
      "grass",
      "clover"
    ]);
  });
});
