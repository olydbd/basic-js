const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }

  formatKey(message, key) {
    if (message.length !== key.length) {
      key = key.repeat(Math.ceil(message.length / key.length));
    }

    let resKey = '';
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        resKey += ' ';
        k++;
        continue;
      }
      resKey += key[i - k];
    }
    return resKey;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let messageCopy = message.toUpperCase();
    if (this.bool === false) {
      messageCopy = messageCopy.split('').reverse().join('');
    }
    let keyCopy = this.formatKey(message, key).toUpperCase();
    let res = '';

    for (let i = 0; i < messageCopy.length; i++) {
      if (messageCopy[i].codePointAt(0) < 65 || messageCopy[i].codePointAt(0) > 90) {
        res += messageCopy[i];
        continue;
      }
      let resCode = Math.abs((messageCopy[i].codePointAt(0) - 65 + keyCopy[i].codePointAt(0) - 65) % 26);
      let resChar = String.fromCodePoint(resCode + 65);
      res += resChar;
    }

    return res;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let messageCopy = encryptedMessage.toUpperCase();
    if (this.bool === false) {
      messageCopy = messageCopy.split('').reverse().join('');
    }
    let keyCopy = this.formatKey(encryptedMessage, key).toUpperCase();
    let res = '';

    for (let i = 0; i < messageCopy.length; i++) {
      if (messageCopy[i].codePointAt(0) < 65 || messageCopy[i].codePointAt(0) > 90) {
        res += messageCopy[i];
        continue;
      }
      let resCode = Math.abs((messageCopy[i].codePointAt(0) + 65 - keyCopy[i].codePointAt(0) + 65) % 26);
      let resChar = String.fromCodePoint(resCode + 65);
      res += resChar;
    }

    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
