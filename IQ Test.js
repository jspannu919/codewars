function iqTest(numbers) {
  num_arr = numbers.split(" ");
  return (
    (num_arr.filter(num => num % 2 == 0).length > 1
      ? num_arr.findIndex(num => num % 2 != 0)
      : num_arr.findIndex(num => num % 2 == 0)) + 1
  );
}
