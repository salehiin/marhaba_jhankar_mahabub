// p148
function addNumbers(a, b){
    console.log(arguments);
    return a + b;
}
const result = addNumbers(5, 8, 9, 6);
console.log(result);

// p149
function mothlyUsage(dailyUsage){
    totalUsage = dailyUsage * 30;
    console.log(totalUsage);
}
mothlyUsage(3);

// practice p153
function divisibleThirteen(number){
    if(number % 13 == 0){
        return true;
    }else{
        return false
    }
}
console.log(divisibleThirteen(39));

// 
function mealBill(num1, num2, num3){
    return num1 + num2 + num3;
}
const mealCost = mealBill( 30, 50, 20 );
console.log(mealCost);

// have to try - done
function stringLength(str){
        return str.length;
    }
console.log(stringLength('names'));

// p154
function checkValue(number){
    if(number < 0){
        return number * -1;
    }else{
        return number;
    }
}
console.log(checkValue(-3));

// p154
function oddEvenString(str){
    if(str.length % 2 == 0){
        // return "Even";
        console.log('Even sized');
    }else{
        // return "Odd";
        console.log('Odd sized');
    }
}
// console.log(oddEvenString('names'));
oddEvenString("name")

// p156

function doubleOrTriple(num, doDouble){
    if(doDouble === true){
        console.log(num * 2);
    }else{
        console.log(num * 3);
    }
}
doubleOrTriple(5, true);
doubleOrTriple(5, false);

// practice p157
function arrayItemOddOrEven(nums){
    if(nums.length % 2 == 0){
        console.log('Even sized');
    }else{
        console.log('Odd sized');
    }
}
const len = arrayItemOddOrEven([3, 5, 7, 8]);

// p158 & 161
function arrayTotal(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sum = sum + number;
        }
    }
    console.log(sum)
}
const arr = [12, 45, 6, 8, 14];
arrayTotal(arr);

// practice p161 - have to try different method
function littleNumber([num1, num2]){
    if(num1 < num2){
        return num1;
    }else{
        return num2;
    }
}
const arrOfNumbers = [20, 45, 78, 100];
const smallNumber = littleNumber(arrOfNumbers);
console.log(smallNumber);
