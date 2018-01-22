export const containsWinningCombination = (arr) => {
  if (
    // horizontal combos
    (arr.includes(0) && arr.includes(1) && arr.includes(2)) ||
    (arr.includes(3) && arr.includes(4) && arr.includes(5)) ||
    (arr.includes(6) && arr.includes(7) && arr.includes(8)) ||
    // vertical combos
    (arr.includes(0) && arr.includes(3) && arr.includes(6)) ||
    (arr.includes(1) && arr.includes(4) && arr.includes(7)) ||
    (arr.includes(2) && arr.includes(5) && arr.includes(8)) ||
    // diagonal combos
    (arr.includes(0) && arr.includes(4) && arr.includes(8)) ||
    (arr.includes(2) && arr.includes(4) && arr.includes(6))
  ) { return true; }
  return false;
};

export const pickSquare = (xArr, oArr) => {
  const randInt = Math.floor(Math.random() * 9);
  if (
    !xArr.includes(randInt) && !oArr.includes(randInt)
  ) { return randInt; }
  return pickSquare(xArr, oArr);
};
