const { expect } = require("chai");
const StringBuilder = require("./string-builder"); // Assuming the StringBuilder class is defined in a separate file

describe("StringBuilder", function () {
  let str;

  beforeEach(function () {
    str = new StringBuilder("hello");
  });

  it("should append a string to the end of the storage", function () {
    str.append(", there");
    expect(str.toString()).to.equal("hello, there");
  });

  it("should prepend a string to the beginning of the storage", function () {
    str.prepend("User, ");
    expect(str.toString()).to.equal("User, hello");
  });

  it("should insert a string at the given index", function () {
    str.insertAt("woop", 5);
    expect(str.toString()).to.equal("hellowoop");
  });

  it("should remove characters starting from the given index", function () {
    str.remove(1, 3);
    expect(str.toString()).to.equal("ho");
  });

  it("should throw a TypeError if a non-string argument is passed", function () {
    expect(() => str.append(123)).to.throw(TypeError, "Argument must be a string");
    expect(() => str.prepend(true)).to.throw(TypeError, "Argument must be a string");
    expect(() => str.insertAt({ key: "value" }, 5)).to.throw(TypeError, "Argument must be a string");
  });
});
