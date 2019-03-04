import { startGame } from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs'

const gameMessage = 'What is the result of the expression?';
const gameConfig = () => {
  const value_a = generateNumber(1, 25);
  const value_b = generateNumber(1, 25);
  const operatorNumber = generateNumber(1, 3);
  const operationChoose = (operatorNumber) => {
    switch(operatorNumber) {
      case 1:
       return cons(`${value_a} + ${value_b}`, value_a + value_b);
      case 2:
        return cons(`${value_a} - ${value_b}`,value_a - value_b );
      case 3:
        return cons(`${value_a} * ${value_b}`, value_a * value_b);
    }
  };
  const gameData = operationChoose(operatorNumber);
  return gameData;
};
export default () => startGame(gameConfig, gameMessage);
