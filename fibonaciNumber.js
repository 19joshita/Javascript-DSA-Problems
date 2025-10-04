// find the fibonaccie number using the recursion and iteration
const fibonaccieRecursion = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonaccieRecursion(n - 1) + fibonaccieRecursion(n - 2);
};

console.log(fibonaccieRecursion(6));
// const fibonaccie
const fobonaccie = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0,
    b = 1,
    c;
  for (let i = 2; i <= n; i++) {
    c = a + b; //0+1 // 1+1 // 2+1
    a = b; // 0 = 1 // 1=1 // 2 = 1
    b = c; // 1 // 2 // 3
  }
  return b;
};
console.log(fobonaccie(2));
// fond the longest word in the sentence

const findLongest = (sentence) => {
  let longest = "";
  let words = sentence.split(" ");

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};
console.log(findLongest("I love programming in JavaScript"));

const findLongests = (sentence) => {
  const result = sentence
    ?.split(" ")
    .reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ""
    );
  return result;
};
const fondLongestSort = (sentence) => {
  const result = sentence.split(" ").sort((a, b) => b.length - a.length)[0];
  return result; 
};
console.log(findLongests("I love programming in JavaScript"));
console.log(fondLongestSort("I love programming in JavaScript"));
