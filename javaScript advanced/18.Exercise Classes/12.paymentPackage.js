const { expect } = require("chai");
const PaymentPackage = require("./PaymentPackage");

describe("PaymentPackage", function () {
  let package;

  beforeEach(function () {
    package = new PaymentPackage("Test Package", 100);
  });

  it("should initialize the package with correct name and value", function () {
    expect(package.name).to.equal("Test Package");
    expect(package.value).to.equal(100);
  });

  it("should throw an error if the name is not a non-empty string", function () {
    expect(function () {
      package.name = null;
    }).to.throw(Error, "Name must be a non-empty string");

    expect(function () {
      package.name = "";
    }).to.throw(Error, "Name must be a non-empty string");
  });

  it("should throw an error if the value is not a non-negative number", function () {
    expect(function () {
      package.value = -10;
    }).to.throw(Error, "Value must be a non-negative number");

    expect(function () {
      package.value = "100";
    }).to.throw(Error, "Value must be a non-negative number");
  });

  it("should throw an error if the VAT is not a non-negative number", function () {
    expect(function () {
      package.VAT = -20;
    }).to.throw(Error, "VAT must be a non-negative number");

    expect(function () {
      package.VAT = "20";
    }).to.throw(Error, "VAT must be a non-negative number");
  });

  it("should throw an error if the active status is not a boolean", function () {
    expect(function () {
      package.active = null;
    }).to.throw(Error, "Active status must be a boolean");

    expect(function () {
      package.active = "true";
    }).to.throw(Error, "Active status must be a boolean");
  });

  it("should return the correct string representation of the package", function () {
    expect(package.toString()).to.equal("Package: Test Package\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120");

    package.active = false;
    expect(package.toString()).to.equal("Package: Test Package (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120");
  });
});
