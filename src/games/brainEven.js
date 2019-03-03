import { startGame } from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs'


const isEven = num => num % 2 === 0;
const trueAnswer = (num) => isEven(num) ? 'yes' : 'no';
const gameMessage = 'Answer "yes" if number even otherwise answer "no".';
const gameConfig = () => {
  const question = generateNumber(1, 13543);
  return cons(question, trueAnswer(question));
};
export default () => startGame(gameConfig, gameMessage);
