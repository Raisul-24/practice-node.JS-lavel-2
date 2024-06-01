const fs = require('fs')

// read file
const readTxt = fs.readFileSync('./texts/read.txt', 'utf-8');
// console.log(readTxt);


// write text

const writtenTxt = fs.writeFileSync('./texts/read.txt', readTxt + "Written By Raisul Islam Hridoy");
console.log(writtenTxt)