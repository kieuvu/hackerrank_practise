function miniMaxSum(arr) {
  const sumResult = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      sum += arr[j];
    }

    sumResult.push(sum);
  }

  console.log(Math.min(...sumResult), Math.max(...sumResult));
}
