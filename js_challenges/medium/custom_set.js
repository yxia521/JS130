class CustomSet {
  constructor(set = []) {
    this.set = set;
  }

  empty() {
    return this.set.length === 0;
  }

  contains(item) {
    return this.set.includes(item);
  }

  subset(anotherSet) {
    return this.set.every(item => anotherSet.contains(item));
  }

  disjoint(anotherSet) {
    return this.set.every(item => !anotherSet.contains(item));
  }

  eql(anotherSet) {
    if (this.set.length !== anotherSet.set.length) {
      return false;
    }

    return this.subset(anotherSet); // if length is the same and one is anotherSet's subset, they must be identical
  }

  add(item) {
    if (!this.contains(item)) {
      this.set.push(item);
    }

    return this;
  }

  intersection(anotherSet) {
    let sharedItems = this.set.filter(item => anotherSet.contains(item));
    return new CustomSet(sharedItems);
  }

  difference(anotherSet) {
    let itemOnlyInFirstSet = this.set.filter(item => !anotherSet.contains(item));
    return new CustomSet(itemOnlyInFirstSet);
  }

  union(anotherSet) {
    let unionSet = new CustomSet(this.set);
    anotherSet.set.forEach(item => {
      unionSet.add(item);
    });

    return unionSet;
  }
}


module.exports = CustomSet;

