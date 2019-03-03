import { startGame } from '..';
import generateNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameMessage = 'What number is missing in the progression?';
const progressionMembers = 10;
const gameConfig = () => {
  const zeroMember = generateNumber(1, 20);
  const diff = generateNumber(1, 7);
  const emptyPosition = generateNumber(1, progressionMembers);
  const findValue = (position) => position === emptyPosition ? '..' :
  zeroMember + (diff * position);
  const createQuestion = () => {
    const iter = (i, acc) => {
      if (i === 1) {
        return `${findValue(i)}` + acc;
      }
      return iter(i - 1, ` ${findValue(i)}` + acc);
    };
    return iter(progressionMembers, '');
  };
  const question = createQuestion();
  const trueAnswer = zeroMember + (diff * emptyPosition);
  return cons(question, trueAnswer);
};
export default () => startGame(gameConfig, gameMessage);
