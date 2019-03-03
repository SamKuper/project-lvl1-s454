import { startGame } from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const createQuestion = () => generateNumber(1, 100);
const trueAnswer = (num) => {
  const maxDivisor = num - 1;
  const minDivisor = 2;
  const iter = (num, i) => {
    if (num % i === 0) {
      return 'no';
    }
    if (num % i !== 0 && i === maxDivisor) {
      return 'yes';
    }
    return iter(num, i + 1);
  };
  return iter(num, minDivisor);
};
const gameConfig = () => {
  const question = createQuestion();
  const questionToString = `${question}`;
  return cons(questionToString, trueAnswer(question));
};
export default () => startGame(gameConfig, gameMessage);
