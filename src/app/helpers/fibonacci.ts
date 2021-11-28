export const fibonacci = (n: number) => {
    return n <= 2 ? 1 : this.fibonacci(n - 1) + this.fibonacci(n - 2)
}