'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

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

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

  const total = getTotalX(arr, brr);

  ws.write(total + '\n');

  ws.end();
}
