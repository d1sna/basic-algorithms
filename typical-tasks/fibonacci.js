const fibonacci = (n) => {
  if (n < 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(3));

// 1
// 1 + 0 = 1
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 2 = 5
