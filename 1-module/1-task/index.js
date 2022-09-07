function factorial(n) {
  let factorialResponse = n;

  if (n === 0 || n === 1) {
    factorialResponse = 1;
  } else {
    for (let i = 1; i < n; i++) {
      factorialResponse *= n - i;
    }
  }

  return factorialResponse;
}
