var countBits = function(n) {
  let c = 0;
  while (n) {
    n &= n - 1;
    c++;
  }
  return c;
};
