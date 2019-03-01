import readlineSync from 'readline-sync';
import { askName, generateQuestion } from '../functions';

const name = askName();
const chekAnswer = (answer, question) => {
  if (Number(question) % 2 === 0 && answer === 'yes') {
    return true;
  }
  if (Number(question) % 2 !== 0 && answer === 'no') {
    return true;
  }
  return false;
};
const anotherAnswer = (answer) => {
  if (answer === 'yes') {
    return 'no';
  }
  return 'yes';
};
const evenGame = () => {
  const iter = (count) => {
    const question = generateQuestion();
    const getAnswer = () => readlineSync.question(`${question} `);
    const answer = getAnswer();
    if (count === 3) {
      return console.log(`Congratulations ${name}`);
    }
    if (chekAnswer(answer, Number(question)) === false) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${anotherAnswer(answer)}, try again, ${name}`);
    }
    console.log('Correct!');
    return iter(count + 1);
  };
  return iter(1);
};
export default evenGame;
