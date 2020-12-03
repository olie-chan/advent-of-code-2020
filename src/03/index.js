function getCharAtPositionX(xPos, lineStr) {
  return lineStr.charAt(xPos % lineStr.length);
}

function isTree(character) {
  return character === '#';
}

function getNumberOfHitTreesForSlope(x, y, listOfTerrains) {
  let result = 0;
  let rightPosition = 0;

  for (let i = y; i < listOfTerrains.length; i += y) {
    rightPosition += x;

    const line = listOfTerrains[i];
    if (line && isTree(getCharAtPositionX(rightPosition, line))) {
      result++;
    }
  }
  return result;
}

module.exports = {
  getCharAtPositionX,
  getNumberOfHitTreesForSlope,
};
