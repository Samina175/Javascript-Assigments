// qureshi Assignment no 21-25


// ==========================================
// QUESTION 1: Merge First & Last Name
// ==========================================
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome to JavaScript.");
document.write("<h3>Question 1:</h3>");
document.write("Greet Message: Hello, " + fullName + "<br><hr>");


// ==========================================
// QUESTION 2: Favorite Mobile Model Length
// ==========================================
var mobileModel = prompt("What is your favorite mobile phone model?");
var modelLength = mobileModel.length;

document.write("<h3>Question 2:</h3>");
document.write("Your favorite mobile model is: " + mobileModel + "<br>");
document.write("Length of string: " + modelLength + "<br><hr>");

// ==========================================
// QUESTION 3: Index of 'n' in 'Pakistani'
// ==========================================
var word3 = "Pakistani";
var indexOfN = word3.indexOf("n");

document.write("<h3>Question 3:</h3>");
document.write("String: " + word3 + "<br>");
document.write("Index of 'n': " + indexOfN + "<br><hr>");


// ==========================================
// QUESTION 4: Last Index of 'l' in 'Hello World'
// ==========================================
var word4 = "Hello World";
var lastIndexOfL = word4.lastIndexOf("l");

document.write("<h3>Question 4:</h3>");
document.write("String: " + word4 + "<br>");
document.write("Last index of 'l': " + lastIndexOfL + "<br><hr>");


// ==========================================
// QUESTION 5: Character at 3rd Index in 'Pakistani'
// ==========================================
var word5 = "Pakistani";
var charAtThree = word5.charAt(3);

document.write("<h3>Question 5:</h3>");
document.write("String: " + word5 + "<br>");
document.write("Character at index 3: " + charAtThree + "<br><hr>");

// ==========================================
// QUESTION 6: Merge Name using concat()
// ==========================================
var fName = prompt("Enter first name for Q6:");
var lName = prompt("Enter last name for Q6:");
// '+' ke bajaye concat() use kiya
var fNameWithSpace = fName.concat(" ");
var full_Name = fNameWithSpace.concat(lName);

document.write("<h3>Question 6:</h3>");
document.write("Merged using concat(): " + full_Name + "<br><hr>");


// ==========================================
// QUESTION 7: Replace 'Hyder' with 'Islam'
// ==========================================
var city = "Hyderabad";
var replacedCity = city.replace("Hyder", "Islam");

document.write("<h3>Question 7:</h3>");
document.write("City: " + city + "<br>");
document.write("After Replacement: " + replacedCity + "<br><hr>");


// ==========================================
// QUESTION 8: Replace all 'and' with '&'
// ==========================================
var message = "Ali and Sami are best friends. They play cricket and football together.";
// replaceAll use karne se saare 'and' badal jayenge
var replacedMessage = message.replaceAll("and", "&");

document.write("<h3>Question 8:</h3>");
document.write("Original Message: " + message + "<br>");
document.write("After Replacing 'and' with '&': " + replacedMessage + "<br><hr>");

// ==========================================
// QUESTION 9: String to Number Conversion
// ==========================================
var stringNum = "472";
var actualNum = Number(stringNum); // Number() se convert kiya

document.write("<h3>Question 9:</h3>");
document.write("Value: " + stringNum + " (Type: " + typeof(stringNum) + ")<br>");
document.write("Value: " + actualNum + " (Type: " + typeof(actualNum) + ")<br><hr>");


// ==========================================
// QUESTION 10: Convert Input to Uppercase
// ==========================================
var userInput10 = prompt("Enter any word to convert in UPPERCASE:");
var upperCaseResult = userInput10.toUpperCase();

document.write("<h3>Question 10:</h3>");
document.write("User Input: " + userInput10 + "<br>");
document.write("Upper Case: " + upperCaseResult + "<br><hr>");


// ==========================================
// QUESTION 11: Convert Input to Title Case
// ==========================================
var userInput11 = prompt("Enter any word to convert in Title Case:");
// Pehla letter capital kiya aur baaki letters ko lowercase rakh kar jor diya
var titleCaseResult = userInput11.charAt(0).toUpperCase() + userInput11.slice(1).toLowerCase();

document.write("<h3>Question 11:</h3>");
document.write("User Input: " + userInput11 + "<br>");
document.write("Title Case: " + titleCaseResult + "<br><hr>");


// ==========================================
// QUESTION 12: Remove Dot from Number
// ==========================================
var num = 35.36;
var numString = num.toString(); // Pehle string banaya
var resultNum = numString.replace(".", ""); // Dot ko khatam kiya

document.write("<h3>Question 12:</h3>");
document.write("Number: " + num + "<br>");
document.write("Result: " + resultNum + "<br><hr>");


// ==========================================
// QUESTION 13: Username Validation
// ==========================================
var username = prompt("Enter your username:");
var isValid = true;

// Loop chala kar check karenge ke koi special character to nahi hai
for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);
    
    // ASCII codes check kar rahe hain: ! (33), , (44), . (46), @ (64)
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false;
        break;
    }
}

document.write("<h3>Question 13:</h3>");
if (isValid === false) {
    alert("Please enter a valid username without @, ., , or !");
    document.write("Username Status: Invalid Username entered.<br><hr>");
} else {
    document.write("Username Status: Valid Username (" + username + ")<br><hr>");
}


// ==========================================
// QUESTION 14: Bakery Item Search (Case Insensitive)
// ==========================================
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// User ki input ko lowercase kar rahe hain taake search aasan ho
var searchLower = userSearch.toLowerCase();
var found = false;
var itemIndex = -1;

for (var i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === searchLower) {
        found = true;
        itemIndex = i;
        break;
    }
}

document.write("<h3>Question 14:</h3>");
if (found === true) {
    document.write(userSearch + " is <b>available</b> at index " + itemIndex + " in our bakery.<br><hr>");
} else {
    document.write("We are sorry. " + userSearch + " is <b>not available</b> in our bakery.<br><hr>");
}


// ==========================================
// QUESTION 16: String to Array using Split
// ==========================================
var university = "University of Karachi";
// split("") karne se har ek letter alag ho jayega
var uniArray = university.split("");

document.write("<h3>Question 16:</h3>");
for (var j = 0; j < uniArray.length; j++) {
    // Agar space ho to <br> print karein wese hi, taake aasan dikhe
    if (uniArray[j] === " ") {
        document.write("[Space]<br>");
    } else {
        document.write(uniArray[j] + "<br>");
    }
}
document.write("<hr>");

// ==========================================
// QUESTION 17: Display Last Character
// ==========================================
var userInput17 = prompt("Enter any word to see its last character:");
// length - 1 karne se hamesha aakhri letter ka index milta hai
var lastChar = userInput17.charAt(userInput17.length - 1);

document.write("<h3>Question 17:</h3>");
document.write("User Input: " + userInput17 + "<br>");
document.write("Last character of input: " + lastChar + "<br><hr>");


// ==========================================
// QUESTION 18: Count Occurrences of 'the'
// ==========================================
var str = "The quick brown fox jumps over the lazy dog";
// Pehle poori string ko lowercase kar rahe hain taake 'The' aur 'the' dono count ho sakein
var strLower = str.toLowerCase();
// split("the") karne se yeh string 'the' ke gird tukron mein toot jayegi
var wordsArray = strLower.split("the");
// Jitne tukray bante hain, word us se hamesha 1 kam baar aaya hota hai
var countOfThe = wordsArray.length - 1;

document.write("<h3>Question 18:</h3>");
document.write("Text: " + str + "<br>");
document.write("There are " + countOfThe + " occurrence(s) of word 'the'<br><hr>");

