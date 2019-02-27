import readlineSync from 'readline-sync';
const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const askName = () => readlineSync.question('May i have your name? ');
  console.log("Hello, " + askName() + "!");
};
export default greeting;
