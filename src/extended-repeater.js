const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addStr = '';
  let resStr = '';

  if (options.addition !== undefined) {
    options.addition = String(options.addition)
  }

  addStr = new Array(options.additionRepeatTimes || 1).fill(options.addition || '').join(`${options.additionSeparator || '|'}`);

  resStr = new Array(options.repeatTimes || 1).fill(String(str) + addStr).join(`${options.separator || '+'}`);

  return resStr;
}

module.exports = {
  repeater
};
