import readlineSync from 'readline-sync';

export const generateQuestion = () => {
  const min = 1;
  const max = 111;
  return Math.round(Math.random() * (max - min + 1)) + min;
};
export const askName = () => readlineSync.question('May i have your name? ');
