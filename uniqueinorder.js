var uniqueInOrder = function(iterable) {
  var prev_char = "";
  var res = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== prev_char) {
      res.push(iterable[i]);
    }
    prev_char = iterable[i];
  }

  return res;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"]);
console.log(uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]);
