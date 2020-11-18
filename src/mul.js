/**
 * @param {Array<number>} numbers
 * @returns {number}
 */
function mul(numbers){
  return numbers.reduce((value, number) => value * number);
}

module.exports = mul;