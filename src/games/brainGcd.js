import { startGame } from '..';
import generateNumber from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const gameMessage = 'Find the greatest common divisor of given numbers.';
const createQuestion = () => {
  const value_a = generateNumber(1, 150);
  const value_b = generateNumber(1, 150);
  return cons(value_a, value_b);
}
const trueAnswer = (pair) => {
  const iter = (a, b, i) => {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
    return iter(a, b, i - 1);
  }
  return car(pair) > cdr(pair) ? iter(car(pair), cdr(pair), cdr(pair)) :
  iter(car(pair), cdr(pair), car(pair));
}
const gameConfig = () => {
  const question = createQuestion();
  const questionToString = `${car(question)} ${cdr(question)}`;
  return cons(questionToString, trueAnswer(question));
}
export default () => startGame(gameConfig, gameMessage);
