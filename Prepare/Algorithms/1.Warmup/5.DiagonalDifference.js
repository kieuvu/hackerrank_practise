function diagonalDifference(arr) {
  const length = arr.length;
  let fSum = 0;
  let sSum = 0;

  for (let i = 0; i < length; i++) {
    fSum += arr[i][i];
    sSum += arr[length - 1 - i][i];
  }

  return Math.abs(fSum - sSum);
}