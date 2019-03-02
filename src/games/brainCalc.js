import { startGame } from '..';
import generateNumber from '../random';

const gameMessage = 'What is the result of the expression?';
const gameConfig = () => {
  const value_a = generateNumber(1, 25);
  const value_b = generateNumber(1, 25);
  const operator = () => {
    const num = generateNumber(1, 3);
    if (num === 1) {
      return '+';
    }
    if (num === 2) {
      return '-';
    }
    return '*';
  }
  const data = [value_a, operator(), value_b];
  const question = `${data[0]} ${data[1]} ${data[2]}`;
  const trueAnswer = (array) => {
    if (array[1] === '+') {
      return Number(array[0]) + Number(array[2]);
    }
    return array[1] === '-' ? Number(array[0]) - Number(array[2]) : Number(array[0]) * Number(array[2]);
  };
  return [question, String(trueAnswer(data))];
};
const brainCalc = () => startGame(gameConfig, gameMessage);
export default brainCalc;
