import { startGame } from '..';
import generateNumber from '../utils';

const gameMessage = 'What number is missing in the progression?';
const createQuestion = () => {
  const progressionMembers = 10;
  const zeroMember = generateNumber(1, 20);
  const diff = generateNumber(1, 7);
  const chooseEmptyPosition = generateNumber(1, 10);
  const findValue = (chooseEmptyPosition, arg) => {
    if (chooseEmptyPosition === arg) {
      return '..'
    }
    return zeroMember + (arg * diff);
  };
  const iter = (i, acc) => {
    if (i === 1) {
      return `${findValue(chooseEmptyPosition, i)}` + acc;
    }
    return iter(i - 1, ` ${findValue(chooseEmptyPosition, i)}` + acc);
  };
  return iter(progressionMembers, '');
};
const trueAnswer = (str) => {
  const numberMembers = 10;
  const position = 1;
  const findEmptyPosition = (str) => {
    const iter = (i, acc) => {
      if (str[i] === '.') {
        return Number(acc);
      }
      if (str[i] === ' ') {
        return iter(i + 1, acc + 1);
      }
      return iter(i + 1, acc)
    }
    return iter(0, position);
  };
  const findDiff = (str) => {
    const count = (str) => {
      if (findEmptyPosition(str) > 2 ) {
        return 0;
      }
      return str.length - 1;
    };
    const iter1 = (i, acc1, acc2, position) => {
      if (str[i] === ' ' && position === 2) {
        return Number(acc2) - Number(acc1);
      }
      if (str[i] === ' ' && position === 1) {
        return iter1(i + 1, acc1, acc2, position + 1);
      }
      if (str[i] !== ' ' && position === 2) {
        return iter1(i + 1, acc1, acc2 + str[i], position);
      }
      return iter1(i + 1, acc1 + str[i], acc2, position);
    };
    const iter2 = (i, acc1, acc2, position) => {
      if (str[i] === ' ' && position === 2) {
        return Number(acc1) - Number(acc2);
      }
      if (str[i] === ' ' && position === 1) {
        return iter2(i - 1, acc1, acc2, position + 1);
      }
      if (str[i] !== ' ' && position === 2) {
        return iter2(i - 1, acc1, str[i] + acc2, position);
      }
      return iter2(i - 1, str[i] + acc1, acc2, position);
    }
    return count(str) === 0 ?
    iter1(count(str), '', '', position) : iter2(count(str), '', '', position);
  };
  const findFirstMember = (str) => {
    const iter = (i, acc) => {
      if (str[i] === ' ') {
        return Number(acc);
      }
      return iter(i + 1, acc + str[i]);
    }
    return iter(0, '');
  };
  const findLastMember = (str) => {
    const iter = (i, acc) => {
      if (str[i] === ' ') {
        return Number(acc);
      }
      return iter(i - 1, str[i] + acc);
    }
    return iter(str.length - 1, '');
  };
  if (findEmptyPosition(str) !== 1) {
    return String(findFirstMember(str) + findDiff(str) * (findEmptyPosition(str) - 1));
  }
  return String(findLastMember(str) - findDiff(str) * (numberMembers - findEmptyPosition(str)));
};
export default () => startGame(createQuestion, trueAnswer, gameMessage);
