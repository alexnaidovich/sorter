const defComparator = (a, b) => a - b;

class Sorter {
  constructor() {
    this.compare = function(a, b) { return a - b };
    this.defComp = defComparator;
    this.store = new Array();
  }

  add(n) {
    this.store.push(n);
  }

  at(i) {
    return this.store[i];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store;
  }

  sort(indices) {
      let temp = [];
      indices.forEach(i => temp.push(this.store[i]));
      temp.sort(this.compare);
      indices.sort();
      for (let j = 0; j < indices.length; j++) {
        this.store[indices[j]] = temp[j];
      }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction ? compareFunction : this.defComp;
  }
}

module.exports = Sorter;