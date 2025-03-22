// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to filter prime numbers in an array
function getPrimeNumbers(arr) {
    return arr.filter(isPrime);
}

const arr = [3,9,7,6,19,29,53];
const primes = getPrimeNumbers(arr);
console.log("Prime numbers in the array:", primes);
