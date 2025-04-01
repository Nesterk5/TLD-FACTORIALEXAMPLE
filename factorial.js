function factorial(n) {
  if (typeof n !== "number") throw new Error("Factorial is only defined for numbers");
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

export default factorial;
