const inquirer = require('inquirer');
const Word = require('./Word');

const wordBank = ['Jurassic Park', 'Titanic', 'Braveheart', 'The Lord of the Rings', 'Avengers', 'Catch Me If You Can', 'Saving Private Ryan', 'Cast Away', 'The Hangover', 'Wedding Crashers'];
let count = 0;
let randWord = '';
let currentWord = '';

function initGame() {
  const randIndex = Math.floor(Math.random() * wordBank.length);
  randWord = wordBank[randIndex];
  currentWord = new Word(randWord);
  count = 0;
  console.log("\n" + currentWord.toString() + "\n");
  runGame();
}

const runGame = function() {
  if(currentWord.roundOver) {
    console.log('\nYou Won! - Next Word -\n');
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
        if(answer.letter.length > 1 || answer.letter === '') {
          console.log('not a valid character...')
        } else {  
          currentWord.guessLetter(answer.letter.toLowerCase());
          count = currentWord.wrongLetterCount;
          console.log(currentWord.toString() + "\n");
        }
        runGame();
      });
  } else {
    console.log(`You lost... The correct word was ${randWord} - Next Word\n`);
    initGame();
  }
};   

initGame();
