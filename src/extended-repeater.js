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
function repeater(/* str, options */) {
  // let strCopy = str;
  // if (options.repeatTimes) {
  //   str = str.split(' ');
  //   for (let i = 1; i < options.repeatTimes; i++) {
  //     str.push(strCopy);
  //   }

  //   // Separator
  //   if (options.separator) {
  //     str = str.join(`${options.separator}`);
  //   } else {
  //     str = str.join('+');
  //   }

  //   // Addition
  //   if (options.addition) {
  //     let add = '' + options.addition;
  //     let addCopy = add;

  //     //Addition Repeat Times
  //     if (options.additionRepeatTimes) {
  //       add = add.split(' ');
  //       for (let i = 1; i < options.additionRepeatTimes; i++) {
  //         add.push(addCopy);
  //       }

  //       // Addition Separator
  //       if (options.additionSeparator) {
  //         add = add.join(`${options.additionSeparator}`);
  //       } else {
  //         add = add.join('|');
  //       }
  //     }

  //     // Merge Str and Addition
  //     if (options.separator) {
  //       str = str.split(`${options.separator}`).map(item => item + add).join(`${options.separator}`);
  //     } else {
  //       str = str.split('+').map(item => item + add).join('+');
  //     }
  //   }
  // }
  // return str;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
