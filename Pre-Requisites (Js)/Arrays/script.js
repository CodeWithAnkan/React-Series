// Create Array
/*

let heroes = ["ironman", "hulk", "Natasha", "batman"];
console.log(heroes, heroes.length);
console.log(typeof heroes);
console.log(heroes[0]);
heroes[0] = "Thor";
console.log(heroes);

// Looping over an Array

// for (let i = 0; i < heroes.length; i++) {
//     const element = heroes[i];
//     console.log(element);
// }

for (const i of heroes) {
    console.log(i);
}

*/

// let cities = ["Delhi", "Mumbai", "Kolkata", "Lucknow", "Bhubaneshwar", "Indore"]

// for (const city of cities) {
//     console.log(city.toUpperCase());
// }

// Q1 For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class

/*
let marks = [85, 97, 44, 37, 76, 60];

// Arranging the array in ascending order

marks.sort((a, b) => a - b);
console.log(marks);

let sum = 0;
for (const mark of marks) {
    sum += mark;
    }
    let average = sum / marks.length;
    console.log(average);
*/


// Q2 For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer

let original_price = [250, 645, 300, 900, 50];
let discount = 0.1;
let final_price = [];
// for (const price of original_price) {
//     let final = price - (price * discount);
//     final_price.push(final);
//     }
//     console.log(final_price);

for (let i = 0; i < original_price.length; i++) {
    let final = original_price[i] - (original_price[i] * discount);
    final_price.push(final);    
}
console.log(final_price)

// Methods in Arrays

let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];
//foodItems.push("chips"); // end se dalna
console.log(foodItems);

foodItems.pop(); // end se delete
console.log(foodItems);

let marks = [78, 100, 86, 91, 89]
console.log(marks.toString()); // strings mein convert karke deta hai

/*
let marvel_heroes = ["ironman", "hulk", "Natasha", "batman"];
let dc_heroes = ["Superman", "Batman", "Flash"];
let indian_heroes = ["Shaktiman", "Krish", "Ra-One"];

let heroes = marvel_heroes.concat(dc_heroes, indian_heroes);
console.log(heroes);

marvel_heroes.unshift("Antman");
console.log(marvel_heroes);

marvel_heroes.shift();
console.log(marvel_heroes);
*/


// Slice(): returns a piece of the array - doesn't change the original array

let marvel_heroes = ["Ironman", "Hulk", "Natasha", "Batman", "Ant-man", "Doctor-Strange", "Spiderman"];

console.log(marvel_heroes.slice(1, 3)); // Ending index is non-inclusive

// Splice(): change ORIGINAL array (add, remove, replace)
// splice(startIdx, delCount, newEl1..)

let arr = [87, 84, 36, 98, 100, 200];
arr.splice(2, 1, 203, 400);
console.log(arr);

// Q3 Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a. Remove the first company from the array

/*
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);
*/

// b. Remove Uber and add Ola in its place
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(2, 1, "Ola");
console.log(companies);

// c. Add Amazon at the end
companies.push("Amazon");
console.log(companies);