function migratoryBirds(arr) {
  let birdTypes = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  let max = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    birdTypes[arr[i]] += 1;
    if (birdTypes[arr[i]] > max) max = birdTypes[arr[i]];
  }
  for (let i = 0; i < arr.length; i++) {
    if (birdTypes[arr[i]] === max) result.push(arr[i]);
  }
  return Math.min(...result);
}