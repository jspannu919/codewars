function findNextSquare(sq) {
  sqrt_sq = Math.sqrt(sq);
  return parseInt(sqrt_sq) === sqrt_sq ? ++sqrt_sq * sqrt_sq : -1;
}
