/**
 * @param {Array<number>} numbers
 * @returns {number}
 */
function add(numbers){
  return numbers.reduce((value, number) => value + number);
}

/**
 * @+
 */
module.exports = add;