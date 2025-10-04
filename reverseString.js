const reverseString = (str) => {
  if (str?.length <= 1) return str;
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
};
// console.log(reverseString("joshita"));
const reverSt = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
// console.log(reverSt("joshita"));
const reverseByMethod = (str) => {
  return str.split("").reverse().join("");
};
// console.log(reverseByMethod("joshita"));

//number is prime or not

const isPrime = (num) => {
  const isPrimes = num % 2 === 0 ? false : true;
  return isPrimes;
};

console.log(isPrime(29)); // true
console.log(isPrime(12)); //false
const isPrimed = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrimed(29)); // true
console.log(isPrimed(12)); //false
// find the missinf number
const missingNumber = (arr) => {
  let n = arr.length + 1;
  console.log(n);
  let total = (n * (n + 1)) / 2; //15
  console.log(total);
  let sum = arr.reduce((a, b) => a + b, 0); //12
  console.log(sum);
  return total - sum;
};
console.log(missingNumber([1, 2, 4, 5]));

const findMissing = (arr) => {
  let n = arr.length + 1;
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) return i;
  }
};
console.log(findMissing([1, 2, 4, 5]));
