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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  let array = Array(a.length).fill(0);
  let max = 0;

  for (let i = 0; i < a.length; i++) {
    array[a[i]]++;
  }

  for (let i = 0; i < a.length; i++) {
    if (array[i] + array[i + 1] > max) {
      max = array[i] + array[i + 1];
    }
  }
  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + '\n');

  ws.end();
}
