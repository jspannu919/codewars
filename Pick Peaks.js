function pickPeaks(arr) {
  pos = [];

  return {
    pos,
    peaks: arr.filter((e, i) => {
      if (e >= arr[i + 1] && e > arr[i - 1]) {
        let j = i + 1;
        if (e == arr[i + 1]) {
          while (e == arr[j]) j++; //iterate while the next item is not the same as e
        }
        if (e > arr[j]) {
          pos.push(i);
          return true;
        }
      }
    })
  };
}
