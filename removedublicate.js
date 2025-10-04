const removeDuplicate = (array) => {
  const unique = [...new Set(array)];
  return unique;
};
console.log(removeDuplicate([1, 2, 3, 4, 5, 6, 6, 6, 7, 7]));

const removeDupli = (array) => {
  if (array?.length === 0) return 0;
  let j = 0;
  for (i = 1; i < array?.length; i++) {
    if (array[i] !== array[j]) {
      j++;
      array[j] = array[i];
    }
  }
  return array.slice(0, j + 1);
};
console.log(removeDupli([1, 2, 3, 4, 5, 6, 6, 6, 7, 7]));

