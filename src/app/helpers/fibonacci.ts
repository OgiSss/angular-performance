export const fibonacci = (n: number): number => {
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};
