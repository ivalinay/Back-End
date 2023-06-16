const assert = require("chai").assert;
const mathEnforcer = require("./mathEnforcer");

describe("mathEnforcer", function () {
  describe("addFive", function () {
    it("should return undefined if the parameter is not a number", function () {
      assert.isUndefined(mathEnforcer.addFive("abc"));
    });

    it("should add 5 to the number", function () {
      assert.strictEqual(mathEnforcer.addFive(10), 15);
    });

    it("should add 5 to negative numbers", function () {
      assert.strictEqual(mathEnforcer.addFive(-3), 2);
    });

    it("should add 5 to floating-point numbers within 0.01 difference", function () {
      assert.closeTo(mathEnforcer.addFive(3.14), 8.14, 0.01);
    });
  });

  describe("subtractTen", function () {
    it("should return undefined if the parameter is not a number", function () {
      assert.isUndefined(mathEnforcer.subtractTen("abc"));
    });

    it("should subtract 10 from the number", function () {
      assert.strictEqual(mathEnforcer.subtractTen(20), 10);
    });

    it("should subtract 10 from negative numbers", function () {
      assert.strictEqual(mathEnforcer.subtractTen(-5), -15);
    });

    it("should subtract 10 from floating-point numbers within 0.01 difference", function () {
      assert.closeTo(mathEnforcer.subtractTen(7.89), -2.11, 0.01);
    });
  });

  describe("sum", function () {
    it("should return undefined if any of the parameters is not a number", function () {
      assert.isUndefined(mathEnforcer.sum("abc", 5));
      assert.isUndefined(mathEnforcer.sum(10, "def"));
      assert.isUndefined(mathEnforcer.sum("xyz", "uvw"));
    });

    it("should return the sum of two numbers", function () {
      assert.strictEqual(mathEnforcer.sum(10, 5), 15);
      assert.strictEqual(mathEnforcer.sum(-3, 8), 5);
      assert.strictEqual(mathEnforcer.sum(2.5, 1.75), 4.25);
    });

    it("should return the sum of negative numbers", function () {
      assert.strictEqual(mathEnforcer.sum(-5, -10), -15);
    });

    it("should return the sum of floating-point numbers within 0.01 difference", function () {
      assert.closeTo(mathEnforcer.sum(3.14, 1.23), 4.37, 0.01);
    });
  });
});
