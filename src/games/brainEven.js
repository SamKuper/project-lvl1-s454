import { startGame } from '..';
import generateNumber from '../utils';


const isEven = num => num % 2 === 0;
const trueAnswer = (num) => isEven(num) ? 'yes' : 'no';
const gameMessage = 'Answer "yes" if number even otherwise answer "no".';
const createQuestion = () => generateNumber(1, 13543);
export default () => startGame(createQuestion, trueAnswer, gameMessage);
