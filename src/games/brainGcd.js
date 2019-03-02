import { startGame } from '..';
import generateNumber from '../utils';

const gameMessage = ('Find the greatest common divisor of given numbers.');
const trueAnswer = (str) => {
  const value_a = (str) => {
    const iter = (str, i, acc) => {
      if (str[i] === ' ') {
        return Number(acc);
      }
      return iter(str, i + 1, acc + str[i]);
    }
    return iter(str, 0, '');
  }
  const value_b = (str) => {
    const iter = (str, i, acc) => {
      if (str[i] === ' ') {
        return Number(acc);
      }
      return iter(str, i - 1, str[i] + acc);
    }
    return iter(str, str.length - 1, '');
  }
  const findGcd = (a, b) => {
    const iter = (a, b, i) => {
      if (a % i === 0 && b % i === 0) {
        return i;
      }
      return iter(a, b, i - 1);
    }
    return a > b ? iter(a, b, b) : iter(a, b, a);
  }
  return String(findGcd(value_a(str), value_b(str)));
};
const createQuestion = () => {
  const value_a = generateNumber(1, 150);
  const value_b = generateNumber(1, 150);
  return `${value_a} ${value_b}`;
}
export default () => startGame(createQuestion, trueAnswer, gameMessage);
