function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let currentElement = s.slice(i, m + i);
    let sum = currentElement.reduce((cur, next) => {
      return cur + next;
    }, 0);
    if (sum == d) count++;
  }
  return count;
}