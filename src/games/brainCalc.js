import { startGame } from '..';
import generateNumber from '../utils';
import { cons, car, cdr } from 'hexlet-pairs'

const operationChoose = (num) => {
  switch(car(cdr(num))) {
    case 1:
     return cons(car(num) + cdr(cdr(num)), '+');
    case 2:
      return cons(car(num) - cdr(cdr(num)), '-');
    case 3:
      return cons(car(num) * cdr(cdr(num)), '*');
  }
};
const gameMessage = 'What is the result of the expression?';
const createQuestion = () => {
  const value_a = generateNumber(1, 25);
  const value_b = generateNumber(1, 25);
  const operatorNumber = generateNumber(1, 3);
  return cons(value_a, cons(operatorNumber, value_b));
};
const trueAnswer = (question) => car(operationChoose(question));
const gameConfig = () => {
  const question = createQuestion();
  const value_a = car(question);
  const value_b = cdr(cdr(question));
  const operator = cdr(operationChoose(question));
  const questionToString = `${value_a} ${operator} ${value_b}`;
  return cons(questionToString, trueAnswer(question));
};
export default () => startGame(gameConfig, gameMessage);
