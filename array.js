// p93
const numbers = [1, 5, 66, 11, 45];
const size = numbers.length;
console.log(size);

// practice p96
// 
const valueUpdate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valueUpdate[7] = 30;
console.log(valueUpdate);

// 
const members = ['zaiyan', 'shanta', 'shakil', 'ruby', 'taher'];
console.log(members);
console.log(members[3]);

// push pop unshift shift
members.push("shajib", "shimky", 6);
members.unshift("sekandar", "nessa");
console.log(members);
const number = members.pop();
const sekandar = members.shift();
console.log(members);
console.log(number);

// p100
const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];
const exist = friends.includes('gelam');
console.log(exist);
const notExist = friends.includes('selam');
console.log(notExist);
console.log(friends.includes('kalam'));
// p101
if(friends.includes('khailam')){
    console.log('Party');
}else{
    console.log('No food. We are fasting')
}
// 
const index = friends.indexOf('gelam');
console.log(index);
console.log(friends.indexOf('salam'));