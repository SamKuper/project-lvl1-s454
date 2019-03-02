import { startGame } from '..';
import generateNumber from '../utils';

const trueAnswer = (str) => {
  let i = 0;
  let j = str.length - 1;
  let acc1 = '';
  let acc2 = '';
  const stringToExpression = (str, i, j, acc1, acc2) => {
    if (str[i] !== ' ') {
      if (str[j] !== ' ') {
        return stringToExpression(str, i + 1, j - 1, String(acc1 + str[i]), String(str[j] + acc2));
      }
      return stringToExpression(str, i + 1, j, String(acc1 + str[i]), String(acc2));
    }
    if (str[i] === ' ') {
      if (str[j] === ' ') {
        if (str[i + 1] === '+') {
          return String(Number(acc1) + Number(acc2));
        }
        if (str[i + 1] === '-') {
          return String(Number(acc1) - Number(acc2));
        }
        return String(Number(acc1) * Number(acc2))
      }
      return stringToExpression(str, i, j - 1, String(acc1), String(str[j] + acc2));
    }
  };
  return stringToExpression(str, i, j, acc1, acc2);
};
const gameMessage = 'What is the result of the expression?';
const createQuestion = () => {
  const value_a = generateNumber(1, 25);
  const value_b = generateNumber(1, 25);
  const operatorChoose = () => {
    const operatorNumber = generateNumber(1, 3);
    switch(operatorNumber) {
      case 1:
       return '-';
      case 2:
       return '+';
      case 3:
        return '*';
    }
  };
  const operator = operatorChoose();
  return `${value_a} ${operator} ${value_b}`;
};
export default () => startGame(createQuestion, trueAnswer, gameMessage);
