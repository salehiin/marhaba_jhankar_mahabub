// practice p105  for of loop
const subjects = ['programming', 'math', 'highermath', 'arabic', 'spanish'];
for(subject of subjects){
    console.log(subject);
}

// practice 109  while loop
// 
let num = 50;
while(num <= 100){
    // console.log(num);
    num++
}

// 
let multiply = 1;
while(multiply <=10){
    // console.log(multiply*3);
    multiply++
}

// 
let divide = 100;
while(divide <= 110){
    console.log(divide/2);
    divide++
}

// 
let number = 1;
let sum = 0;
while(number <= 10){
    // console.log(number);
    sum = number + sum;
    number++
    // console.log(sum);
}
console.log(`Sum: ${sum}`)

// practice p111
let fiftyToHundred = 50;
while(fiftyToHundred <= 100){
    // console.log(fiftyToHundred);
    fiftyToHundred++;
}

// 
let fiveToFifteen = 5;
let sumFiveToFifteen = 0;
while(fiveToFifteen <= 15){
    // console.log(fiveToFifteen);
    sumFiveToFifteen = fiveToFifteen + sumFiveToFifteen;
    fiveToFifteen++;
}
console.log(`Sum: ${sumFiveToFifteen}`);

// 
let toFifty = 21;
let sumToFifty = 0;
while(toFifty <= 50){
    // console.log(toFifty);
    sumToFifty = toFifty + sumToFifty;
    toFifty++
    console.log(sumToFifty);
}
// console.log(`Sum: ${sumToFifty}`)

// p113 for loop
for(let digit = 0; digit <= 5; digit++){
    // console.log(digit);
}

// p114
let rollSum = 0;
for(let i = 31; i <= 58; i++){
    rollSum = rollSum + i;
}
console.log(`Sum of roll ${rollSum}`);

// p117
for(let i = 1; i <= 30; i ++){
    if(i % 5 == 0){
        // console.log(i);
    }
}
// or
for(let i = 5; i <=30; i += 5){
    // console.log(i);
}

// practice p119
// 
let divisibleThirteen = 0;
for(let i = 1; i <= 40; i++){
    if(i % 13 == 0){
        // console.log(i)
        divisibleThirteen = divisibleThirteen + i;
    }
} 
// console.log(divisibleThirteen);

// 
let divisible = 0;
for(let i = 1; i <= 50; i++){
    if(i % 3 == 0 && i % 4 == 0){
        console.log(i)
        divisible = divisible + i;
    }
} 
console.log(divisible);

// practice p122
// 
for(let i = 0; i <= 30; i++){
    // console.log(i);
    if(i >= 15){
        break;
    }
}
// 
for(let i = 0; i <= 40; i++){
    if(i % 7 === 0){
        continue;
    }
    // console.log(i);
}
// 
for(let i = 0; i <= 15; i++){
    if(i === 9){
        continue;
    }
    // console.log(i);
}
// 
// 
for(let i = 91; i <= 120; i++){
    console.log(i);
    if(i % 10 === 0){
        break;
    }
    console.log(i);
}
    