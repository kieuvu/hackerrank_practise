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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

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

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + '\n');

  ws.end();
}
