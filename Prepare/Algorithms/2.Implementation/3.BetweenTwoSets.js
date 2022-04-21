function getTotalX(a, b) {
  let numberBetweenArray = [];
  for (let i = a[a.length - 1]; i <= b[0]; i += a[a.length - 1]) {
    let validNumber = true;
    a.forEach((item) => {
      if (i % item !== 0) {
        validNumber = false;
        return;
      }
    });
    b.forEach((item) => {
      if (item % i !== 0) {
        validNumber = false;
        return;
      }
    });
    if (validNumber) {
      numberBetweenArray.push(i);
    }
  }

  return numberBetweenArray.length;
}