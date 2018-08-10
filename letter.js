module.exports = function (char) {
  this.char = char,
  this.hasGuessed = false,
  this.replaceLetter = function() {
    if(hasGuessed) {
      return this.char;
    }
    return '_'
  },
  this.checkLetter = function(charGuess) {
    if(charGuess === this.char) {
      this.hasGuessed === true;
    }
  }
};