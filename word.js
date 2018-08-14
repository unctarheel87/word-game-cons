const Letter = require('./letter');

const Word = function (word) {
  const letterObjArr = [];
  for(let letter of word) {
    const letterObj = new Letter(letter);
    letterObjArr.push(letterObj);
  }
  this.letters = letterObjArr,
  this.toString = function() {
    let word = '';
    for(let letter of this.letters) {
      word += letter.replaceLetter();
    }
    return word;
  },
  this.guessLetter = function(charGuess) {
    for(let letter of this.letters) {
      letter.checkLetter(charGuess);
    }
  }

};

module.exports = Word;