const inquirer = require('inquirer');
const Word = require('./Word');

const wordBank = ['hello', 'thanks', 'whatsup'];
const randIndex = Math.floor(Math.random() * wordBank.length);

let currentWord = new Word(wordBank[randIndex]);
console.log(currentWord.toString());

let count = 0
const runGame = function() {
  if(count < 10) {
    inquirer
      .prompt([
        {
          name: 'letter',
          message: "Guess a Letter!"
        }
      ])
      .then(function(answer) {
        console.log(answer.letter);
        currentWord.guessLetter(answer.letter);
        console.log(currentWord.toString());
        runGame();
      });
  }
};   

runGame();