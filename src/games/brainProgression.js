import { startGame } from '..';
import generateNumber from '../utils';
import { cons, car, cdr } from 'hexlet-pairs';

const gameMessage = 'What number is missing in the progression?';
const createQuestion = () => {
  const zeroMember = generateNumber(1, 20);
  const diff = generateNumber(1, 7);
  const chooseEmptyPosition = generateNumber(1, 10);
  return cons(zeroMember, cons(diff, chooseEmptyPosition));
};
const trueAnswer = (question) => {
  return car(question) + car(cdr(question)) * cdr(cdr(question));
};
const gameConfig = () => {
  const question = createQuestion();
  const progressionMembers = 10;
  const zeroMember = car(question);
  const diff = car(cdr(question));
  const emptyPosition = cdr(cdr(question));
  const findValue = (position) => {
    if (position === emptyPosition) {
      return '..';
    }
    return zeroMember + diff * position;
  };
  const questionToString = () => {
    const iter = (i, acc) => {
      if (i === 1) {
        return `${findValue(i)}` + acc;
      }
      return iter(i - 1, ` ${findValue(i)}` + acc);
    };
    return iter(progressionMembers, '');
  };
  return cons(questionToString(), trueAnswer(question));
}
export default () => startGame(gameConfig, gameMessage);
