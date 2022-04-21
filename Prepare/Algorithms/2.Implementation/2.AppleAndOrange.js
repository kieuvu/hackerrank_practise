function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleOnSamHouse = 0;
  let orangeOnSamHouse = 0;

  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleOnSamHouse++;
    }
  }
  for (let j = 0; j < oranges.length; j++) {
    if (b + oranges[j] <= t && b + oranges[j] >= s) {
      orangeOnSamHouse++;
    }
  }

  console.log(appleOnSamHouse);
  console.log(orangeOnSamHouse);
}