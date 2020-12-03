function getProduct(nums) {
  return nums.reduce((total, x) => total * x, 1);
}

module.exports = {
  getProduct,
};
