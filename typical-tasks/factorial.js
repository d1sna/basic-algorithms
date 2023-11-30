const factorial = (n) => {
  if (n === 1) return n;
  return n * factorial(n - 1);
};

console.log(factorial(5), { "5! = ": 1 * 2 * 3 * 4 * 5 });
