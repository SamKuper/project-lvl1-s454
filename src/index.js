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
    console.log('Question:  ' + car(gameData));
    const answer = readlineSync.question('Your answer: ');
    if (answer == cdr(gameData) && i === 1) {
      console.log(`Congratulations, ${askName}!`);
      return;
    }
    if (answer != cdr(gameData)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(gameData)}, try again, ${askName}`);
      return;
    }
    console.log('Correct!');
    iter(i - 1);
  };
  iter(rounds);
};
