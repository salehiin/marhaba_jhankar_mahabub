
// p165 - wrong code - have to correct

function kilometerToMile(kilometer){
    const mileFraction =  kilometer / 1.609;
    const mileNumber = parseInt(mileFraction);
    const kiloRemaining = kilometer % 1.609;
    const result = (`${mileNumber} mile ${kiloRemaining} kilometer`);
    return result;
}
const MotiToKak = kilometerToMile(2);
console.log(MotiToKak);

// p167 - wrong code - have to correct
function findLeapyear(year){
    if(year % 400 === 0 || year % 4 === 0 || year % 100 === 0){
        console.log('Leap year');
    }else if(year % 100 === 0 && year % 400 !== 0){
        console.log('Not leap year');
    }else{
        console.log('Not leap year');
    }
}
findLeapyear(2300);
findLeapyear(2400);
findLeapyear(2000);
findLeapyear(2024);


// page 170
function oddAverage(numbers){
    const odds = [];
    for(number of numbers){
        if(number % 2 === 1){
            odds.push(number);
            // console.log(`Odd numbers found`);
        }
    }
    if(odds.length === 0){
        console.log(`No odd numbers found`);
        return 0;
    }else{
        console.log("Odd numbers found")
    }
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    // console.log(sum);
    const count = odds.length;
    const avg = sum / count;
    return avg;
}
const numberArray = [ 2, 3, 6, 8, 9, 11 ]
// console.log(oddAverage(numberArray));
// const avg = oddAverage(numberArray);
// console.log(avg);
const array2 = [ 2, 6, 8, 14 ]
const avg2 = oddAverage(array2);
console.log(`Without odd numbers: ${avg2}`);

// practice p175
function newArray(numbers){
    const evens = [];
    for(number of numbers){
        if(number % 2 === 1){
            minus = number - 1;
            evens.push(minus);
        }
    }
    return evens;
}
const evenArray = [1, 4, 5, 7, 9, 12, 15];
const newEvenArray = newArray(evenArray);
console.log(newEvenArray);

// p177
function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const testArray = [1, 3, 3, 4, 5, 7, 9, 10, 10, 12, 15];
const uniqueArray = noDuplicate(testArray);
// console.log(uniqueArray);

// p178
let a = 5;
let b = 7;
console.log(a, b);
const temp = a;
a = b;
b = temp;
console.log(a, b);