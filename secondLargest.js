const secondLargest = (array) => {
  let first = array[0];
  let second = -Infinity;
  for (let i = 1; i < array?.length; i++) {
    if (array[i] > first) {
      second = first;
      first = array[i];
    } else if (array[i] > second && array[i] < first) {
      second = array[i];
    }
  }
  return second;
};
console.log(secondLargest([10, 20, 4, 45, 99]));

const secondLarge = (arr) => {
  let unique = [...new Set(arr)];
  const sorting = unique?.sort((a, b) => b - a);
  return sorting[1];
  // console.log(sorting[1]);
};
console.log(secondLarge([2, 35, 56, 66, 66, 77, 10, 1]));
