// reverse of string
const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
console.log(reverseString("microsoft"));

//reverseBy method
const reveseByMethod = (str) => {
  const reverse = str?.split("").reverse().join("");
  return reverse;
};
console.log(reveseByMethod("joshita"));
//reverse by recursion
const reverseByRecursion = (str) => {
  if (str?.length <= 0) return str;
  return str[str.length - 1] + reverseByRecursion(str.slice(0, str.length - 1));
};

console.log(reverseByRecursion("test"));
//find isPrime
const isPrimed = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i !== 0) return true;
  }
  return false;
};
console.log(isPrimed(11));
//missingNumber
const missingNumber = (arr) => {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  let sum = arr?.reduce((a, b) => a + b, 0);
  return total - sum;
};
console.log(missingNumber([1, 2, 3, 4, 6]));
const missingNum = (arr) => {
  let n = arr.length + 1;
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) return i;
  }
};
console.log(missingNum([1, 2, 3, 4, 6]));

// fibonacci number means a number in which we add the first number like 1, 1-1 = 2, 2+1 =3, 3+2 = 5
//  find the fibonacci element according to there counting number like if I have to find the fobonacci number of at the place 3 the output will be 2
// by recursion f(n) = f(n-1)  + f(n-2)
const fibonacciNumber = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
};
console.log(fibonacciNumber(10));
//loop
const fibbonacciElement = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0,
    b = 1,
    c;
  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};
console.log(fibbonacciElement(6));

// find the longest word from the string
const longestWord = (sentence) => {
  let word = sentence?.split(" ").sort((a, b) => b?.length - a?.length);
  return word[0];
};
console.log(longestWord("I love programming in JavaScript"));
const findLongest = (sentence) => {
  let longest = "";
  let words = sentence.split(" ");
  for (let word of words) {
    if (word?.length > longest?.length) {
      longest = word;
    }
  }
  return longest;
};
const findLongestWord = (sentence) => {
  const longestWord = sentence
    ?.split(" ")
    .reduce((el, acc) => (acc.length > el.length ? acc : el), "");
  return longestWord;
};
console.log(findLongestWord("I love programming in JavaScript"));
// console.log(findLongest("I love programming in JavaScript"));
