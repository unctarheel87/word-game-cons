const Letter = require('./letter');

const Word = function (word) {
  const letterObjArr = [];
  for(let letter of word) {
    const letterObj = new Letter(letter);
    letterObjArr.push(letterObj);
  };
  this.letters = letterObjArr,
  this.toString = function() {
    let word = '';
    for(let letter of this.letters) {
      word += letter.replaceLetter();
    };
    return word;
  },
  this.guessLetter = function(charGuess) {
    for(let letter of this.letters) {
      letter.checkLetter(charGuess);
    };
    if(word.indexOf(charGuess) === -1) {
      console.log('INCORRECT!');
    } else {
      console.log('CORRECT!');
    }
    if(this.letters.every(function(letter) {
      return letter.hasGuessed;
    })) {
      this.roundOver = true;
    };
  }
};

module.exports = Word;