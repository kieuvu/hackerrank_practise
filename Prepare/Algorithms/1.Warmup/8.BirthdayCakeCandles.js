function birthdayCakeCandles(candles) {
  const tallestCandle = Math.max(...candles);
  return candles.filter((candle) => {
    return candle == tallestCandle;
  }).length;
}