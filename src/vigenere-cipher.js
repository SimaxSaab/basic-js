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
  constructor(direction) {
    this.direction = direction === undefined ? true : direction;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(str, key) {
    return this.crypt(str, key, 'encrypt');
  }

  decrypt(str, key) {
    return this.crypt(str, key, 'decrypt');
  }

  crypt(message, key, mode) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    let keyRepeat = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
    let cryptMessage = '',
      k = '',
      charCount = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        k += keyRepeat[charCount];

        if (mode === 'encrypt') {
          cryptMessage += this.alphabet[(this.alphabet.indexOf(message[i])+ this.alphabet.indexOf(k[i])) % 26];
        } else {
          let char = this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(k[i]);
          if (char < 0) char += 26;
          cryptMessage += this.alphabet[char]
        }
        charCount++;
      } else {
        k += message[i];
        cryptMessage += message[i];
      }
    }
    return this.direction ? cryptMessage : cryptMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
