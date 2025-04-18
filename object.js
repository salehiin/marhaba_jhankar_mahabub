// practice p127
const laptop = {
    brand: 'Lenovo',
    processor: 'core i5',
    ram: 8,
    price: 50000,
    display: 15
}
// p128
const laptopModel = 'brand';
console.log(laptop[laptopModel]);
// p129
laptop.price = 60000;
laptop['display'] = 16;
console.log(laptop['price']);
console.log(laptop.display);

// p132
const family = {
    father: {
        name: 'Taher',
        age: 75,
        profession: 'Business',
    },
    mother: {
        name: 'Nilu',
        age: 60,
        profession: 'Home maker',
    }
}
const fAge = family.father.age;
const mAge = family.mother.age;
console.log(fAge + mAge);

// p132
const familyKeys = Object.keys(family);
console.log(familyKeys);
// p133
const familyValues = Object.values(family);
console.log(familyValues);
// 
const hasName = familyKeys.includes("name");
console.log(hasName);
// p134
if ('brother' in family) {
    console.log("Brother exists");
} else {
    console.log("No Brother");
}
if (family.hasOwnProperty('sister')) {
    console.log("Sister exists");
} else {
    console.log("No Sister");
}
// 
if (family.mother.profession === "Home maker") {
    console.log("Basay besta");
} else {
    console.log("Baire besta");
}
// p135
const familyEntries = Object.entries(family);
console.log(familyEntries);
// p136
for (const key in family) {
    const value = family[key];
    console.log(key, value);
}

// practice p137
const book = {
    name: 'mindset',
    author: 'dweck',
    price: 200
}
const bookKeys = Object.keys(book);
console.log(bookKeys);
console.log(Object.keys(book));
const bookValues = Object.values(book);
console.log(bookValues);
for (const key in book) {
    const value = book[key];
    console.log(key, value);
}

// 
const phone = {
    brand: 'Samsung',
    model: 'Galaxy S21',
    price: 85000
}
const phoneKeys = Object.keys(phone);
for (const key of phoneKeys) {
    console.log(key, phone[key]);
}

// 
const numbers = { a: 10, b: 20, c: 30, d: 40 };
for (const number in numbers) {
    const value = numbers[number];
    // console.log(number, value);
    
    // have to try

}

