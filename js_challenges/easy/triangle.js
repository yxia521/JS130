// triangle main function

class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3;
  }

  kind() {
    let allSides = [this.s1, this.s2, this.s3];
    let isValidSide = allSides.every(side => side > 0);
    let largestSide = Math.max(...allSides);

    if (isValidSide) {
      if (largestSide * 2 > allSides.reduce((sum, side) => sum + side)) {
        throw new Error('Invalid Triangle');
      } else if (this.s1 === this.s2 && this.s2 === this.s3) {
        return 'equilateral';
      } else if (this.s1 === this.s2 || this.s1 === this.s3 || this.s2 === this.s3) {
        return 'isosceles';
      } else {
        return 'scalene';
      }
    } else {
      throw new Error('Each side needs to be greater than 0.');
    }
  }
}

module.exports = Triangle;
