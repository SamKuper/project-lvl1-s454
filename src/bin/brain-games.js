#!/usr/bin/env node
import {askName} from '..';

console.log('Welcome to the Brain Games!\n');
const name = askName();
console.log(`Hello, ${name}!`);
