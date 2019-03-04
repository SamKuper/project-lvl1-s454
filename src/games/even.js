import { startGame } from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs'

const isEven = num => num % 2 === 0;
const trueAnswer = (num) => isEven(num) ? 'yes' : 'no';
const gameMessage = 'Answer "yes" if number even otherwise answer "no".';
const gameConfig = () => {
  const question = generateNumber(1, 13543);
  const correctAnswer = trueAnswer(question)
  return cons(question, correctAnswer);
};
export default () => startGame(gameConfig, gameMessage);
