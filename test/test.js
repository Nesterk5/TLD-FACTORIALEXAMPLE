import { assert } from "chai";
import factorial from "../factorial.js";

describe("Factorial Function", function () {
  it("Factorial of 0 is 1", function () {
    assert.strictEqual(factorial(0), 1);
  });
  it("Factorial of 1 is 1", function () {
    assert.strictEqual(factorial(1), 1);
  });
  it("Factorial of 5 is 120", function () {
    assert.strictEqual(factorial(5), 120);
  });
  it("Factorial of 10 is 3628800", function () {
    assert.strictEqual(factorial(10), 3628800);
  });
  it("Factorial of -1 should throw an error", function () {
    assert.throws(
      () => factorial(-1),
      Error,
      "Factorial is not defined for negative numbers"
    );
  });
  it('Factorial of "1" should throw an error', function () {
    assert.throws(
      () => factorial("1"),
      Error,
      "Factorial is only defined for numbers"
    );
  });
  it('Factorial of "hello" (invalid string) should throw an error', function () {
    assert.throws(
      () => factorial("hello"),
      Error,
      "Factorial is only defined for numbers"
    );
  });
});
