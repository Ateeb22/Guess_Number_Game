'use strict';
// ------------ DOM manipulation ------------
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 👌';
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 30;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no Number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⛔';
    // When guess is correct
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number 👍';
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // ALTERNATE CODE -- 2
  // When guess is wrong
  else if (guess !== secretnumber) {
    document.querySelector('body').style.backgroundColor = '#0b1d51';
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretnumber ? 'Too High 📈' : 'Too Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
      document.querySelector('.score').textContent = 0;
    }
  }

  // ALTERNATE CODE -- 2
  // when guess is high
  //   else if (guess > secretnumber) {
  //     document.querySelector('body').style.backgroundColor = '#0b1d51';
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High 📈';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game 💥';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // when guess is low
  //   } else if (guess < secretnumber) {
  //     document.querySelector('body').style.backgroundColor = '#0b1d51';
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low 📉';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game 💥';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#0b1d51';
});
