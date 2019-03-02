import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const askName = readlineSync.question('May i have your name: ');
  console.log(`Hello, ${askName}!`);
};
export const startGame = (createQuestion, trueAnswer, gameMessage) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${gameMessage}`);
  const askName = readlineSync.question('May i have your name: ');
  console.log(`Hello, ${askName}!`);
  const rounds = 3;
  const iter = (i) => {
    const question = createQuestion();
    const correctAnswer = trueAnswer(question);
    console.log(`${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer && i === 1) {
      return console.log(`Congratulations, ${askName}!`);
    }
    if (answer !== correctAnswer) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}, try again, ${askName}`);
    }
    console.log('Correct!');
    return iter(i - 1);
  };
  return iter(rounds);
};
