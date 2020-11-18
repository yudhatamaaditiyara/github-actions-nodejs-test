/**
 * @param {Array<number>} numbers
 * @returns {number}
 */
function sub(numbers){
  return numbers.reduce((value, number) => value - number);
}

module.exports = sub;