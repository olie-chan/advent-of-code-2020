function getValueFromBinarySpacing({ value, upper }) {
  return [...value].reduce(
    ([bottom, top], section) => (section === upper
      ? [top - (top - bottom - 1) / 2, top]
      : [bottom, (top - 1 + bottom) / 2]),
    [0, 2 ** value.length - 1],
  )[0];
}

const LENGTH_OF_ROW_ID = 7;

function getRowAndCol(s) {
  return [
    getValueFromBinarySpacing({
      value: s.slice(0, LENGTH_OF_ROW_ID),
      upper: 'B',
    }),
    getValueFromBinarySpacing({ value: s.slice(LENGTH_OF_ROW_ID), upper: 'R' }),
  ];
}

function getIdFromRowAndCol([row, col]) {
  return row * 8 + col;
}

function getLargestIdFromBoardings(listOfBoardings) {
  return listOfBoardings.reduce(
    (largestId, boarding) => Math.max(
      getIdFromRowAndCol(
        getRowAndCol(boarding),
      ),
      largestId,
    ),
    0,
  );
}

function findMyId(listOfBoardings) {
  const ids = new Set(listOfBoardings.map((b) => getIdFromRowAndCol(
    getRowAndCol(b),
  )));
  const max = getLargestIdFromBoardings(listOfBoardings);

  for (let i = 0; i < max; i++) {
    if (ids.has(i) && !ids.has(i + 1) && ids.has(i + 2)) {
      return i + 1;
    }
  }
}
module.exports = {
  getValueFromBinarySpacing,
  getRowAndCol,
  getIdFromRowAndCol,
  getLargestIdFromBoardings,
  findMyId,
};
