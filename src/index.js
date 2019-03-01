import readlineSync from 'readline-sync';

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
  const iter = (rounds) => {
    const qa = gameConfig();
    console.log(`${qa[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === qa[1] && rounds === 1) {
      return console.log(`Congratulations, ${askName}!`);
    }
    if (answer !== qa[1]) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${qa[1]}, try again, ${askName}`);
    }
    console.log('Correct!');
    return iter(rounds - 1);
  };
  return iter(3);
};
