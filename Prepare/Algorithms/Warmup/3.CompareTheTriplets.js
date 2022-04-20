function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    }
    if (a[i] < b[i]) {
      bobScore++;
    }
  }
  return [aliceScore, bobScore];
}
