var maxSequence = function(arr) {
  let cur_sum = 0;
  return arr.reduce((acc, num) => {
    cur_sum += num;
    if (cur_sum < 0) {
      cur_sum = 0;
    }
    if (cur_sum > acc) {
      acc = cur_sum;
    }
    return acc;
  });
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
