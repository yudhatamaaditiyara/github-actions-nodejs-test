/**
 * @param {Array<number>} numbers
 * @returns {number}
 */
function div(numbers){
  return numbers.reduce((value, number) => value / number);
}

module.exports = div;