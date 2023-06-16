describe("Sum of positive numbers", () => {
  it("Should return the correct sum", () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = sum(numbers);
    assert.equal(result, 15);
  });
});

describe("Sum of negative numbers", () => {
  it("Should return the correct sum", () => {
    const numbers = [-1, -2, -3, -4, -5];
    const result = sum(numbers);
    assert.equal(result, -15);
  });
});

describe("Sum of mixed positive and negative numbers", () => {
  it("Should return the correct sum", () => {
    const numbers = [1, -2, 3, -4, 5];
    const result = sum(numbers);
    assert.equal(result, 3);
  });
});

describe("Sum of an empty array", () => {
  it("Should return 0", () => {
    const numbers = [];
    const result = sum(numbers);
    assert.equal(result, 0);
  });
});

describe("Sum of an array with one element", () => {
  it("Should return the value of the single element", () => {
    const numbers = [10];
    const result = sum(numbers);
    assert.equal(result, 10);
  });
});
