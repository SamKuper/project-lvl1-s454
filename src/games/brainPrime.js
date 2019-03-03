import { startGame } from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isEven = num => num % 2 === 0;
const isPrime = (num) => {
  if (isEven(num) && num > 3) {
    return false;
  }
  const minDivisor = 3;
  const iter = (i) => {
    if (num % i !== 0 && i > num / i) {
      return true;
    }
    if (num % i === 0) {
      return false;
    }
    return iter(i + 1)
  };
  return iter(minDivisor)
};
const gameConfig = () => {
  const question = generateNumber(1, 100);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};
export default () => startGame(gameConfig, gameMessage);
