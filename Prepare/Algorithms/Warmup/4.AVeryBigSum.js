function aVeryBigSum(ar) {
  return ar.reduce((cur, next) => {
    return cur + next;
  }, 0);
}
