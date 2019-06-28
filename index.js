function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (toN !== fromN) {
    return toN + sum(fromN, toN - 1);
  } else {
    return fromN;
  }
}

module.exports = sum;
