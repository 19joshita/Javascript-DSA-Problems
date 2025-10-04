// reverse Array

const reverseArray = (arr) => {
  let unique = [...new Set(arr)];
  let result = [];
  for (i = unique?.length - 1; i >= 0; i--) {
    // result.push(unique[i]);
    result[result.length] = unique[i];
  }
  return result;
};

console.log(reverseArray([1, 2, 3, 4, 5, 5, 6, 6, 7]));

// find MinMax

const minMax = (arr) => {
  let min = arr[0],
    max = arr[0];
  for (i = 1; i <= arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
};
console.log(minMax([10, 20, 30, 40, 50, 11, 24, 5, 60]));
const minMximum = (arr) => {
  const getMinMax = arr?.reduce(
    (acc, val) => {
      if (val < acc.min) acc.min = val;
      if (val > acc.max) acc.max = val;
      return acc;
    },
    { min: arr[0], max: arr[0] }
  );
  return getMinMax;
};
console.log(minMximum([10, 20, 30, 40, 50, 11, 24, 5, 60]));
// find the second largest

const secondLargest = (arr) => {
  let first = arr[0],
    second = -Infinity;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  return second;
};
console.log(secondLargest([3, 4, 7, 8, 10, 12, 34, 5, 2, 30]));
const secondLarge = (arr) => {
  const unique = [...new Set(arr)];
  const sorted = unique.sort((a, b) => b - a);
  return sorted[2];
};
console.log(secondLarge([3, 4, 7, 8, 10, 12, 34, 5, 2, 30]));

//remove duplicate from an arrayco
const removeDuplicate = (arr) => {
  let j = 0;
  for (i = 1; i < arr?.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr.slice(0, j + 1);
};
console.log(removeDuplicate([3, 4, 7, 8, 8, 8, 10, 12, 34, 5, 2, 30]));

//return table of any number

const getTable = (num, end) => {
  let table = [];
  for (let i = 1; i <= end; i++) {
    table.push(i * num);
  }
  return table;
};
let result = getTable(2, 15);
result.map((el) => console.log(el));
