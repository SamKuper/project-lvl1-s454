import { askName } from './functions';

const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = askName();
  console.log(`Hello, ${name}!`);
};
export default greeting;
