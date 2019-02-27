import readlineSync from 'readline-sync';
const greeting = () => {
  const askName = () => readlineSync.question('May i have your name? ');
  console.log("Hello, " + askName() + "!");
};
export default greeting;
