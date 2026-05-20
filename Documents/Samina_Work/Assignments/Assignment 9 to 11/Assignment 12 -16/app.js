// qureshi  assignmentno 12 16

// ====== QUESTION #1 ======

// Character check karna (Number, Uppercase, Lowercase)
let inputChar = prompt("Q1: Koi bhi ek character (Letter ya Number) enter karein:");
let code = inputChar.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("Q1: Aapne ek NUMBER enter kiya hai.");
} else if (code >= 65 && code <= 90) {
    alert("Q1: Aapne UPPERCASE LETTER enter kiya hai.");
} else if (code >= 97 && code <= 122) {
    alert("Q1: Aapne LOWERCASE LETTER enter kiya hai.");
} else {
    alert("Q1: Yeh koi symbol ya special character hai.");
}


// ====== QUESTION #2 ======

// Do numbers mein se bara number dikhana
let num1 = +prompt("Q2: Pehla number (Integer) enter karein:");
let num2 = +prompt("Q2: Doosra number (Integer) enter karein:");

if (num1 > num2) {
    alert("Q2: Bara number hai: " + num1);
} else if (num2 > num1) {
    alert("Q2: Bara number hai: " + num2);
} else {
    alert("Q2: Dono numbers barabar (Equal) hain.");
}


// ====== QUESTION #3 ======


// Number positive, negative ya zero hai
let checkNum = +prompt("Q3: Koi bhi number enter karein (Positive/Negative/Zero check karne ke liye):");

if (checkNum > 0) {
    alert("Q3: Yeh number POSITIVE hai.");
} else if (checkNum < 0) {
    alert("Q3: Yeh number NEGATIVE hai.");
} else {
    alert("Q3: Yeh number ZERO hai.");
}


// ====== QUESTION #4 ======


// Vowel check karna (a, e, i, o, u)
let char = prompt("Q4: Ek single letter enter karein (Vowel check karne ke liye):");
// Letter ko choti abc (lowercase) mein convert kar rahe hain taake dono check ho jayein
char = char.toLowerCase(); 

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert("Q4: True (Yeh ek Vowel hai)");
} else {
    alert("Q4: False (Yeh Vowel nahi hai)");
}


// ====== QUESTION #5 ======


// Password validation
let correctPassword = "Samina@123"; // Aapka sahi password
let userPassword = prompt("Q5: Apna password enter karein:");

if (userPassword === "" || userPassword === null) {
    alert("Q5: Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Q5: Correct! The password you entered matches the original password.");
} else {
    alert("Q5: Incorrect password");
}


// ====== QUESTION #6 ======


// Galat code ko sahi karna (Fixing if/else)
var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
} else { // Yahan bracket sahi jagah lagaya hai
    greeting = "Good evening"; 
}
console.log("Q6 Fixed Greeting: " + greeting);


// ====== QUESTION #7 ======



// Time format (24 hour clock)
let time = +prompt("Q7: Time enter karein 24-hour format mein (Jaise: 1900):");

if (time >= 0 && time < 1200) {
    alert("Q7: Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Q7: Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Q7: Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Q7: Good night!");
} else {
    alert("Q7: Invalid time enter kiya hai.");
}



//assignment no 14 -16

// ====== QUESTION #1 ======
// Literal notation se empty array
let studentNamesLiteral = [];

// ====== QUESTION #2 ======
// Object notation (Constructor) se empty array
let studentNamesObject = new Array();

// ====== QUESTION #3 ======
// Strings array
let stringsArray = ["Apple", "Banana", "Mango", "Orange"];

// ====== QUESTION #4 ======
// Numbers array
let numbersArray = [10, 20, 30, 40, 50];

// ====== QUESTION #5 ======
// Boolean array
let booleanArray = [true, false, true, false];

// ====== QUESTION #6 ======
// Mixed array (isay har tarah ka data ho sakta hai)
let mixedArray = ["Samina", 25, true, "JavaScript", 100];


// ====== QUESTION #7 ======
// Qualifications array aur usay browser mein dikhana
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ol>");
for (let i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");
document.write("<hr>");


// ====== QUESTION #8 ======
// Students ke naam, score aur percentage
let students = ["Ali", "Asif", "Sara"];
let scores = [320, 230, 480];
let totalMarks = 500;

document.write("<h2>Students Scores & Percentages:</h2>");
for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}
document.write("<hr>");


// ====== QUESTION #9 ======
// Colors Array ke mukhtalif methods (push, pop, shift, unshift, splice)
let colors = ["Red", "Green", "Blue"];
document.write("<h2>Colors Array Operations:</h2>");
document.write("Original Array: " + colors.join(", ") + "<br><br>");

// a. Shuru mein color add karna (unshift)
let colorToStart = prompt("Q9-a: Shuru mein kaunsa color add karna chahte hain?");
colors.unshift(colorToStart);
document.write("a. Shuru mein add karne ke baad: " + colors.join(", ") + "<br>");

// b. Aakhir mein color add karna (push)
let colorToEnd = prompt("Q9-b: Aakhir mein kaunsa color add karna chahte hain?");
colors.push(colorToEnd);
document.write("b. Aakhir mein add karne ke baad: " + colors.join(", ") + "<br>");

// c. Shuru mein do mazeed colors add karna
colors.unshift("Yellow", "Purple");
document.write("c. Shuru mein do aur add karne ke baad: " + colors.join(", ") + "<br>");

// d. Pehla color delete karna (shift)
colors.shift();
document.write("d. Pehla color delete karne ke baad: " + colors.join(", ") + "<br>");

// e. Aakhir wala color delete karna (pop)
colors.pop();
document.write("e. Aakhir wala color delete karne ke baad: " + colors.join(", ") + "<br>");

// f. Kisi makhsoos index par color add karna (splice)
let addIndex = +prompt("Q9-f: Kis index (position) par color add karna hai? (0, 1, 2...)");
let newColorName = prompt("Q9-f: Color ka naam kya hai?");
colors.splice(addIndex, 0, newColorName);
document.write("f. Index " + addIndex + " par add karne ke baad: " + colors.join(", ") + "<br>");

// g. Kisi makhsoos index se colors delete karna (splice)
let deleteIndex = +prompt("Q9-g: Kis index se color(s) delete karne hain?");
let deleteCount = +prompt("Q9-g: Kitne colors delete karne hain?");
colors.splice(deleteIndex, deleteCount);
document.write("g. Index " + deleteIndex + " se " + deleteCount + " colors delete karne ke baad: " + colors.join(", ") + "<br>");
document.write("<hr>");


// ====== QUESTION #10 ======
// Array ko tartoob dena (Sorting)
let studentScores = [320, 230, 480, 120];
document.write("<h2>Sorting Array:</h2>");
document.write("Scores before sort: " + studentScores.join(", ") + "<br>");
// Numbers ko sahi sort karne ke liye standard function diya hai
studentScores.sort(function(a, b){ return a - b; }); 
document.write("Scores after sort (Ascending): " + studentScores.join(", ") + "<br>");
document.write("<hr>");


// ====== QUESTION #11 ======
// Cities array se copy karna (slice method)
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(1, 4); // Index 1, 2, aur 3 ko copy karega
document.write("<h2>Cities Array Copy:</h2>");
document.write("All Cities: " + cities.join(", ") + "<br>");
document.write("Selected Cities: " + selectedCities.join(", ") + "<br>");
document.write("<hr>");


// ====== QUESTION #12 ======
// Array ke alfaz ko jor kar single string banana (join method)
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
document.write("<h2>Array Join Method:</h2>");
document.write("Array: " + JSON.stringify(arr) + "<br>");
document.write("String: " + singleString + "<br>");
document.write("<hr>");


// ====== QUESTION #13 ======
// FIFO (First In First Out) - Line mein pehle aane wala pehle nikalta hai (push aur shift)
let fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");

document.write("<h2>FIFO (First In First Out):</h2>");
document.write("Devices: " + fifoArray.join(", ") + "<br><br>");
document.write("Out: " + fifoArray.shift() + "<br>");
document.write("Out: " + fifoArray.shift() + "<br>");
document.write("Out: " + fifoArray.shift() + "<br>");
document.write("Out: " + fifoArray.shift() + "<br>");
document.write("<hr>");


// ====== QUESTION #14 ======
// LIFO (Last In First Out) - Jo aakhir mein aaya woh pehle niklega (push aur pop)
let lifoArray = [];
lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");

document.write("<h2>LIFO (Last In First Out):</h2>");
document.write("Devices: " + lifoArray.join(", ") + "<br><br>");
document.write("Out: " + lifoArray.pop() + "<br>");
document.write("Out: " + lifoArray.pop() + "<br>");
document.write("Out: " + lifoArray.pop() + "<br>");
document.write("Out: " + lifoArray.pop() + "<br>");
document.write("<hr>");


// ====== QUESTION #15 ======
// Dropdown/Select Menu banana browser mein
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h2>Phone Manufacturers Dropdown:</h2>");
document.write("<select>");
document.write("<option disabled selected>Select a Mobile Brand</option>");
for (let i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}
document.write("</select>");