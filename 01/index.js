const getPairFor = (aTotal, aListOfNums) => {
  const pairs = {}

  for (const x of aListOfNums) {
    const pair = aTotal - x;

    if (pairs[pair]) {
      return [x, pair];
    }
    pairs[x] = true;
  }
}

const getTripletFor = (aTotal, aListOfNums) => {
  for (let i = 0; i < aListOfNums.length; i++) {
    const x = aListOfNums[i];

    const result = getPairFor(
      aTotal - x,
      aListOfNums
      .slice(0, i)
      .concat(
        aListOfNums.slice(i+1)
      )
    )

    if (result) {
      return [x].concat(result);
    }
  }
}

const getProduct = (nums) => nums.reduce((total, x) => total * x, 1)


module.exports = {
  getPairFor,
  getTripletFor,
  getProduct,
};
