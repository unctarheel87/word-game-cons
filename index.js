const inquirer = require('inquirer');
const Word = require('./Word');

const wordBank = ['hello', 'thanks', 'whatsup'];
let count = 0;
let currentWord = '';

function initGame() {
  const randIndex = Math.floor(Math.random() * wordBank.length);
  currentWord = new Word(wordBank[randIndex]);
  count = 0;
  console.log(currentWord.toString());
  runGame();
}

const runGame = function() {
  if(currentWord.roundOver) {
    console.log('\n--- You Won! --- New Word ----\n');
    initGame();
  } else if(count < 10) {
    inquirer
      .prompt([
        {
          name: 'letter',
          message: "Guess a Letter!"
        }
      ])
      .then(function(answer) {
        currentWord.guessLetter(answer.letter);
        console.log(currentWord.toString());
        count++;
        runGame();
      });
  } else {
    console.log(`Sorry Game Over... The correct word was ${currentWord}`);
    console.log('\n--- You Lost... --- New Word ----\n')
    initGame();
  }
};   

initGame();