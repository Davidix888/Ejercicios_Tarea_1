//Luis David Ixquiac Sac
//1521223
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial de 5:", factorial(5));
