class Hex {
  constructor(value) {
    this.value = Number(value);
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return "0x" + this.value.toString(16).toUpperCase();
  }

  plus(number) {
    const newValue = this.value + (number instanceof Hex ? number.valueOf() : Number(number));
    return new Hex(newValue);
  }

  minus(number) {
    const newValue = this.value - (number instanceof Hex ? number.valueOf() : Number(number));
    return new Hex(newValue);
  }

  static parse(string) {
    const decimalValue = parseInt(string, 16);
    return decimalValue;
  }
}
let FF = new Hex(255);
console.log(FF.toString()); // 0xFF
console.log(FF.valueOf() + 1 === 256); // true

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); // 0xF
console.log(a.plus(b).toString() === "0xF"); // true

console.log(Hex.parse("AAA"));
