const maxMinNumber = (arr) => {
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr?.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
};
// console.log(maxMinNumber([3, 5, 1, 8, 2]));

const minMax = (arr) => {
  return arr.reduce(
    (acc, el) => {
      if (el < acc.min) acc.min = el;
      if (el > acc.max) acc.max = el;
      return acc;
    },
    {
      min: arr[0],
      max: arr[0],
    }
  );
};
console.log(minMax([3, 4, 5, 9, 0, 8]));
