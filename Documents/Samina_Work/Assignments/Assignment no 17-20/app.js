// qureshi   Assignment no 17-20 


// ==========================================
// QUESTION 1: Empty Multidimensional Array
// ==========================================
let multiArray = [[], [], []];


// ==========================================
// QUESTION 2: Multidimensional Array Matrix
// ==========================================
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];


// ==========================================
// QUESTION 3: Print Counting 1 to 10
// ==========================================
console.log("Counting 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ==========================================
// QUESTION 4: Multiplication Table with Input
// ==========================================
let tableNumber = +prompt("Enter a number to print its multiplication table:");
let tableLength = +prompt("Enter length of the table:");

console.log(`\nMultiplication table of ${tableNumber} (Length: ${tableLength}):`);
for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}


// ==========================================
// QUESTION 5: Print Items of Array using Loop
// ==========================================
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("\nFruits List:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Element at index ${i} is ${fruits[i]}`);
}


// ==========================================
// QUESTION 6: Generate Series
// ==========================================
// a. Counting: 1 to 15
let countingSeries = [];
for (let i = 1; i <= 15; i++) {
    countingSeries.push(i);
}
console.log("\nCounting:", countingSeries.join(", "));

// b. Reverse counting: 10 to 1
let reverseSeries = [];
for (let i = 10; i >= 1; i--) {
    reverseSeries.push(i);
}
console.log("Reverse counting:", reverseSeries.join(", "));

// c. Even: 0 to 20
let evenSeries = [];
for (let i = 0; i <= 20; i += 2) {
    evenSeries.push(i);
}
console.log("Even:", evenSeries.join(", "));

// d. Odd: 1 to 19
let oddSeries = [];
for (let i = 1; i <= 10; i++) {
    oddSeries.push(2 * i - 1);
}
console.log("Odd:", oddSeries.join(", "));

// e. Series: 2k to 20k
let kSeries = [];
for (let i = 2; i <= 20; i += 2) {
    kSeries.push(i + "k");
}
console.log("Series:", kSeries.join(", "));


// ==========================================
// QUESTION 7: Search by User Input
// ==========================================
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
let found = false;
let itemIndex = -1;

for (let i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        itemIndex = i;
        break;
    }
}

if (found) {
    alert(`${userInput} is available at index ${itemIndex} in our bakery.`);
} else {
    alert(`We are sorry. ${userInput} is not available in our bakery.`);
}


// ==========================================
// QUESTION 8: Identify Largest Number
// ==========================================
let numbersArr1 = [24, 53, 78, 91, 12];
let largestNumber = numbersArr1[0];

for (let i = 1; i < numbersArr1.length; i++) {
    if (numbersArr1[i] > largestNumber) {
        largestNumber = numbersArr1[i];
    }
}
console.log("\nArray items:", numbersArr1);
console.log("The largest number is " + largestNumber);


// ==========================================
// QUESTION 9: Identify Smallest Number
// ==========================================
let numbersArr2 = [24, 53, 78, 91, 12];
let smallestNumber = numbersArr2[0];

for (let i = 1; i < numbersArr2.length; i++) {
    if (numbersArr2[i] < smallestNumber) {
        smallestNumber = numbersArr2[i];
    }
}
console.log("\nArray items:", numbersArr2);
console.log("The smallest number is " + smallestNumber);


// ==========================================
// QUESTION 10: Multiples of 5 (1 to 100)
// ==========================================
let multiplesOf5 = [];
for (let i = 5; i <= 100; i += 5) {
    multiplesOf5.push(i);
}
console.log("\nMultiples of 5 ranging 1 to 100:", multiplesOf5.join(", "));