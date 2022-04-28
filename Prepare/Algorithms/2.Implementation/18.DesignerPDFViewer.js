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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
  const char = ["a", "b", "c", "d", "e", "f", "j", "h", "i", "j", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  word = word.split("");

  let highestChar = {
    height: 0,
  };

  [...new Set(word)].forEach(w => {
    if (h[char.indexOf(w)] > highestChar.height) {
      highestChar.height = h[char.indexOf(w)];
      highestChar.char = w;
      highestChar.duplicate = word.filter((c) => {
        return c == w;
      }).length;
    }
  });

  return word.length * highestChar.height;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

  const word = readLine();

  const result = designerPdfViewer(h, word);

  ws.write(result + '\n');

  ws.end();
}
