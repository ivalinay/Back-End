function solution() {
  class StringBuilder {
    constructor() {
      this.value = "";
    }

    append(string) {
      this.value += string;
    }
    removeStart(n) {
      this.value = this.value.substring(n);
    }
    removeEnd(n) {
      this.value = this.value.slice(0, -n);
    }
    print() {
      console.log(this.value);
    }
  }

  let stringBuilder = new StringBuilder();
  return stringBuilder;
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
