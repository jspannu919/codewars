function sortArray(array) {
  odd_sorted = array.filter(num => num % 2 != 0).sort((a, b) => a - b);

  return array.map(n => {
    return n % 2 != 0 ? odd_sorted.shift() : n;
  });
}
