const STUDENTS = [
  'Alice', 'Bob', 'Charlie', 'David',
  'Eve', 'Fred', 'Ginny', 'Harriet',
  'Ileana', 'Joseph', 'Kincaid', 'Larry'
];

const PLANTS = {
  R: 'radishes',
  C: 'clover',
  G: 'grass',
  V: 'violets',
};

const FIRST_ROW = 0;
const SECOND_ROW = 1;

class Garden {
  constructor(diagram, students = STUDENTS) {
    this.diagram = diagram;
    this.students = students.sort();
    this.rows = this.diagram.split('\n');
    this.students.forEach((student, index) => {   // Create a property for each name, with value an array of plants
      this[student.toLowerCase()] = this.getPlantsForStudent(index);
    });
  }

  getPlantsForStudent(index) {
    let cupIndex = index * 2;   // need to discover this pattern
    return [
      PLANTS[this.rows[FIRST_ROW][cupIndex]],
      PLANTS[this.rows[FIRST_ROW][cupIndex + 1]],
      PLANTS[this.rows[SECOND_ROW][cupIndex]],
      PLANTS[this.rows[SECOND_ROW][cupIndex + 1]],
    ];
  }
}

module.exports = Garden;

/*

alice
[ 'RC', 'GG' ]        row 1, index 0 1; row 2, index 0 1

bob
[ 'VVCG', 'VVRC' ]    row 1, index 2 3; row 2, index 2 3

charlie
["VVCCGG", "VVCCGG"]  row 1, index 4 5; row 2, index 4 5


*/
