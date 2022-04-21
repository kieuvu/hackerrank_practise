function breakingRecords(scores) {
  let highestScore = scores[0];
  let lowestScore = scores[0];

  let newHighestScore = 0;
  let newLowestScore = 0;

  scores.forEach((score) => {
    if (score > highestScore) {
      highestScore = score;
      newHighestScore += 1;
      return;
    }
    if (score < lowestScore) {
      lowestScore = score;
      newLowestScore += 1;
      return;
    }
  });

  return [newHighestScore, newLowestScore];
}