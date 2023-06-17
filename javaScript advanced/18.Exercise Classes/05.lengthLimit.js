class Stringer {
  constructor(string, initialLength) {
    this.innerString = string;
    this.innerLength = initialLength;
  }
  increase(length) {
    this.innerLength += length;
  }
  decrease(length) {
    this.innerLength -= length;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }
  toString() {
    let truncatedString = this.innerString.slice(0, this.innerLength);
    if (this.innerString.length > this.innerLength) {
      truncatedString += "...";
    }
    return truncatedString;
  }
}
let test = new Stringer("Test", 5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
test.increase(4);
console.log(test.toString());
