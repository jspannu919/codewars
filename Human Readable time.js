function humanReadable(sec) {
  let min = parseInt(sec / 60);
  let hrs = parseInt(sec / 3600);
  sec = parseInt(sec % 3600);
  while (hrs % 3600 != hrs) hrs %= 3600;
  min -= hrs * 60;
  sec -= min * 60;
  let add_zero = num => (num < 10 ? "0" + num : num);
  return add_zero(hrs) + ":" + add_zero(min) + ":" + add_zero(sec);
}
