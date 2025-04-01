import { assert } from "chai";
import factorial from "../factorial.js";

describe("Factorial Function", function () {
  it("Factorial of 0 is 1", function () {
    assert.strictEqual(factorial(0), 1);
  });
  it("Factorial of -1 should throw an error", function () {
    assert
      .strictEqual(factorial(-1))
      .toThrow("Factorial is not defined for negative numbers");
  });
});
