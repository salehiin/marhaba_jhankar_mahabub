// practice - p64

// 1
const wrongInt = '20';
console.log(parseInt(wrongInt) + 10);

// 2
const floatValue = 3.14159;
console.log(parseInt(floatValue));

// 3
const premikBoy = 'premikBoy';
console.log(parseInt(premikBoy));

// 4
const first = 3.456;
const second = 2.789;
const total = first + second;
const totalNumber = (total.toFixed(2));
console.log(totalNumber);
// const totalNumber = parseFloat(total.toFixed(2));

// 5
const firstString = parseInt('56.78');
const secondString = parseInt('12.34');
const stringTotal = firstString + secondString;
// const stringNumberTotal = parseInt(stringTotal);
console.log(stringTotal)

// 6
const stringOne = parseInt('10.5678');
const stringTwo = parseInt('5.4321');
const twoString = stringOne + stringTwo;
const twoStringSum = parseFloat(twoString.toFixed(1));
console.log(twoStringSum);

// 7 - takes time to understand
const randomNumber = parseInt('42.45689754');
const convertFloat = randomNumber.toFixed(3);
console.log(convertFloat);