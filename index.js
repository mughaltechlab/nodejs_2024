// * ES6 module
import { getPosts } from "./postController.js";

const myPosts = getPosts();

console.log(myPosts[0].title);


// * commonJS Module
// const {genRandNum, celsiusToFarenheit} = require('./util');
// // const genRandNum = require('./util');
// // const celsiusToFarenheit = require('./util');

// console.log(`Random Number is : ${genRandNum()}`);
// console.log(`50 Celsius to farhenheit is : ${celsiusToFarenheit(0)}`);