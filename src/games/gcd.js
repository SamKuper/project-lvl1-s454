import { startGame } from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameMessage = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  const min = a > b ? b : a;
  const iter = (a, b, i) => {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
    return iter(a, b, i - 1);
  };
  return iter(a, b, min);
};
const gameConfig = () => {
  const value_a = generateNumber(1, 150);
  const value_b = generateNumber(1, 150);
  const question = `${value_a} ${value_b}`;
  const trueAnswer = gcd(value_a, value_b);
  return cons(question, trueAnswer);
}
export default () => startGame(gameConfig, gameMessage);
