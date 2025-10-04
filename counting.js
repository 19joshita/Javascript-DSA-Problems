const getTableOfAnyNumber = (len, num) => {
  let table = [];
  for (i = 1; i <= len; i++) {
    console.log(`${num} * ${i} = ${i * num}`);
    table.push(i * num);
  }
  return table;
};
let result = getTableOfAnyNumber(10, 5);
// result?.forEach((el) => console.log(el));

// get user input a number into a prompt check if a number of multiple of 5 or not?
// const number = prompt("Enter a number");
// console.log(number % 5 === 0 ? true : false);
let scrore = 55;
if (scrore >= 80 && scrore <= 100) {
  console.log(`grade A`);
} else if (scrore >= 70 && scrore <= 80) {
  console.log("grade B");
} else if (scrore >= 60 && scrore <= 69) {
  console.log("grade C");
} else if (scrore >= 50 && scrore <= 59) {
  console.log("grade D");
} else if (scrore >= 0 && scrore <= 40) {
  console.log("Failed");
}
// console.log(scrore, "scored");
// reverseArray

const reverseArr = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // result.push(arr[i]);
    result[result.length] = arr[i];
  }
  return result;
};
console.log(reverseArr([2, 4, 5, 6, 7, 8, 9]));

// find max and min element in the array

const findMinMax = (arr) => {
  let maximum, minimum;
  const unique = [...new Set(arr)];
  console.log(unique);
  const min = unique.sort((a, b) => a - b);
  minimum = min[0];
  const max = unique.sort((a, b) => b - a);
  maximum = max[0];
  return { minimum, maximum };
};
// console.log(findMinMax([2, 3, 4, 5, 5, 6, 6, 7]));

const MinMax = (arr) => {
  const result = arr.reduce(
    (acc, val) => {
      if (val < acc.min) acc.min = val;
      if (val > acc.max) acc.max = val;
      return acc;
    },
    { min: arr[0], max: arr[0] } // body of the accumalator
  );
  return result;
};
// console.log(MinMax([2, 3, 4, 5, 5, 6, 6, 7]));

const minMaximum = (arr) => {
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
};
// console.log(minMaximum([2, 3, 4, 5, 5, 6, 6, 7]));
//second largest number from an array
const secondLargest = (arr) => {
  const unique = [...new Set(arr)];
  const sorted = unique.sort((a, b) => b - a);
  console.log(unique);
  return sorted[1];
};
console.log(secondLargest([2, 3, 4, 5, 5, 6, 6, 7, 10, 20]));

const secondLarge = (arr) => {
  let first = arr[0];
  let second = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  return second;
};
console.log(secondLarge([2, 3, 4, 5, 5, 6, 6, 7, 10, 20]));

// remove duplicate
const removeDuplicate = (arr) => {
  const sort = [...new Set(arr)];
  return sort;
};
console.log(removeDuplicate([2, 3, 4, 5, 5, 6, 6, 7, 10, 20]));

const removeDupli = (arr) => {
  if (arr.length === 0) return 0;
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr.slice(0, j + 1);
};
console.log(removeDupli([2, 3, 4, 5, 5, 6, 6, 7, 10, 20]));
