function plusMinus(arr) {
  const arrLength = arr.length;

  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeroNumbers = 0;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > 0) positiveNumbers++;
    if (arr[i] < 0) negativeNumbers++;
    if (arr[i] == 0) zeroNumbers++;
  }

  let proportionOfPositive = (positiveNumbers / arrLength).toFixed(6);
  let proportionOfZeros = (zeroNumbers / arrLength).toFixed(6);
  let proportionOfNegative = (negativeNumbers / arrLength).toFixed(6);

  console.log(proportionOfPositive);
  console.log(proportionOfNegative);
  console.log(proportionOfZeros);
}