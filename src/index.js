import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const askName = readlineSync.question('May i have your name: ');
  console.log(`Hello, ${askName}!`);
};
export const startGame = (gameConfig, gameMessage) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${gameMessage}`);
  const askName = readlineSync.question('May i have your name: ');
  console.log(`Hello, ${askName}!`);
  const rounds = 3;
  const iter = (i) => {
    const gameData = gameConfig();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    if (i === 0) {
      console.log(`Congratulations, ${askName}!`);
      return;
    }
    console.log('Question:  ' + question);
    const answer = readlineSync.question('Your answer: ');
    if (answer != correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}, try again, ${askName}`);
      return;
    }
    console.log('Correct!');
    iter(i - 1);
  };
  iter(rounds);
};
