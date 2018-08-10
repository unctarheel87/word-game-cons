const Letter = require('./letter');

function Word(word) {
  let wordCons = []
  for(let letter of word) {
    const letterObj = new Letter(letter);
    wordCons.push(letterObj);
  }
  this.word = wordCons;
}

const hello = new Word('hello');
console.log(hello.word);