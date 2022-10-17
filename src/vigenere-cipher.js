const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(direct = true) {
    this.direct = direct;
    this.alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.arryaCoder = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }

  error(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
  }

  encrypt(message, key) {
    this.error(message, key);
    // if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let coderArray = message.split("");
    let keyArr = key.split("").map((element) => element.toUpperCase());
    if (!this.direct) {
      coderArray.reverse();
    }

    coderArray = coderArray
      .filter((item) => {
        if (item !== undefined) return item;
      })
      .map((item) => item.toUpperCase());

    let keyCounter = 0;
    let encrypted = coderArray
      .map((elem) => {
        if (this.arryaCoder.includes(elem)) {
          let indexRotated = keyCounter % key.length;
          let offsetNumber = this.arryaCoder.indexOf(keyArr[indexRotated]);
          let newIndex = (this.arryaCoder.indexOf(elem) + offsetNumber) % 26;
          let newLetter = this.arryaCoder[newIndex];
          keyCounter++;
          return newLetter;
        } else {
          return elem;
        }
      })
      .join("");
    return encrypted;
  }
  decrypt(message, key) {
    this.error(message, key);
    // if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let coderArray = message.split("");
    let keyArr = key.split("").map((elem) => elem.toUpperCase());
    if (!this.direct) {
      coderArray.reverse();
    }

    coderArray = coderArray
      .filter((item) => {
        if (item !== undefined) return item;
      })
      .map((item) => item.toUpperCase());

    let keyCounter = 0;
    let decrypted = coderArray
      .map((elem) => {
        if (this.arryaCoder.includes(elem)) {
          let indexRotated = keyCounter % key.length;
          let offsetNumber = this.arryaCoder.indexOf(keyArr[indexRotated]);
          let newIndex = this.arryaCoder.indexOf(elem) - offsetNumber;
          if (newIndex < 0) newIndex += 26;
          newIndex = newIndex % 26;
          let newLetter = this.arryaCoder[newIndex];
          keyCounter++;
          return newLetter;
        } else {
          return elem;
        }
      })
      .join("");
    return decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
