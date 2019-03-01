import { startGame } from '..';
import generateNumber from '../random';

const isEven = num => num % 2 === 0;
const gameConfig = () => {
  const createQuestion = generateNumber(1, 13445);
  const trueAnswer = (num) => {
    if (isEven(num)) {
      return 'yes';
    }
    return 'no';
  };
  return [createQuestion, trueAnswer(createQuestion)];
};
const gameMessage = 'Answer "yes" if number even otherwise answer "no".';
const brainEven = () => startGame(gameConfig, gameMessage);
export default brainEven;
