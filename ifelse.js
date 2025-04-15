// practice - p81
const price = 6500;
if(price >= 5000){
    const discount = price / 100 * 10;
    const pay = price - discount;
    console.log(pay); 
}else{
    console.log(price);
}



// practice - p82
const fair = 4000;
if(fair >= 5000){
    const discount = fair / 100 * 10;
    const pay = fair - discount;
    console.log(pay);
}else if (fair >= 2500){
    const discount = fair / 100 * 5;
    const pay = fair - discount;
    console.log(pay);
}else{
    console.log(fair)
}

// practice - p84
const age = 55;
const foodPrice = 5000;
if(age <= 12){
    const discount = foodPrice / 100 * 100;
    const pay = foodPrice - discount;
    console.log(pay);
}else if(age >= 60){
    const discount = foodPrice / 100 * 50;
    const pay = foodPrice - discount;
    console.log(pay);
}else{
    console.log(foodPrice);
}

// practice - p85
const money = 300;
const popcornPrice = 40;
if(money >= 300){
    console.log("Going to movies");
    if(popcornPrice <= 50){
        console.log("Buying Popcorn")
    }else{
        console.log("Popcorn is expensive");
    }
}else{
    console.log("Home Alone")
}

// practice - p86
const isInvite = true;
const pocketMoney = 1000;
if(isInvite === true){
    console.log("Going to party")
    if(pocketMoney >= 1000){
        console.log("Going to party with gift")
    }else{
        console.log("Party without gift")
    }
}else{
    console.log("No invitation")
}

// 4
const haveFood = false;
const appWorking = false;
if(haveFood){
    console.log("Preapare for eat")
}else{
    if(appWorking){
        console.log("Order food")
    }else{
        console.log("I am fasting")
    }
}

// p89
const yourAge = 19;
yourAge >= 19 ? console.log("Vote") : console.log("Not elligible");

// 
let value = 500;
let isLeader = false;
// if(isLeader ===true){
//     console.log("Ostad free");
// }else{
//     console.log(`${value + 100}`);
// }

value = isLeader === true ? 0 : value + 200;
console.log(value);

// practice 90
// 
let payment = 5000;
payment = payment > 3000 ? payment - 500 : payment;
console.log(payment);

// 
const myAge = 19;
myAge >= 19 ? console.log("Teenager") : console.log("Child");

// 
const isLoggedIn = true;
isLoggedIn ? console.log("Welcome back") : console.log("Please login");


// 
const sunny = false;
!sunny ? console.log("Stay home") : console.log("Have a walk");