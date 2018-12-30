function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d+/g)[0] - b.match(/\d+/g)[0];
    })
    .join(" ");
}
