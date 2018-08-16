var Letter = function (char) {
  this.char = char;
  this.char === ' ' ? this.hasGuessed = true : this.hasGuessed = false;
  this.replaceLetter = function() {
    if(this.hasGuessed) {
      return this.char;
    }
    return '_';
  };
  this.checkLetter = function(charGuess) {
    if(charGuess === this.char.toLowerCase()) {
      this.hasGuessed = true;
    }
  };
};

module.exports = Letter;