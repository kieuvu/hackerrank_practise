'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

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

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
