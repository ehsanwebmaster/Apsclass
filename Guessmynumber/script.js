'use strict';
// document.querySelector('.check').addEventListener('click', function () {
//   console.log('Hello');
// });
// console.log(typeof(document.querySelector('.guess').value));

let randomNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } 
  
  else if (guess === randomNumber) {
    displayMessage('🧑🏻‍❤️ Correct number');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } 
  
  else if (guess !== randomNumber) {
    if (score > 1) {
      guess < randomNumber ? displayMessage('📉 Too low!'): displayMessage('📈 Too High!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤦‍♂️ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   else if (guess < randomNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🤦‍♂️ You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   else if (guess > randomNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🤦‍♂️ You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
