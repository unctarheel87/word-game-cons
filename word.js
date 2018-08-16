const Letter = require('./letter');
const red = "\x1b[31m%s\x1b[0m";
const green = "\x1b[32m%s\x1b[0m";

const Word = function (word) {
  const letterObjArr = [];
  for(let letter of word) {
    const letterObj = new Letter(letter);
    letterObjArr.push(letterObj);
  };
  this.letters = letterObjArr;
  this.wrongLetterCount = 0;
  this.toString = function() {
    let word = '';
    for(let letter of this.letters) {
      word += letter.replaceLetter();
    };
    return word;
  };
  this.guessLetter = function(charGuess) {
    for(let letter of this.letters) {
      letter.checkLetter(charGuess);
    };
    if(word.toLowerCase().indexOf(charGuess) === -1) {
      console.log("\n" + red, "INCORRECT!\n");
      this.wrongLetterCount++;
      console.log(10 - this.wrongLetterCount + " guesses left!\n")
    } else {
      console.log("\n" + green, "CORRECT!\n");
    }
    if(this.letters.every(function(letter) {
      return letter.hasGuessed;
    })) {
      this.roundOver = true;
    };
  }
};

module.exports = Word;