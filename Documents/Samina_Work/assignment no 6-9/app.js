// qureshi assignment

// ==========================================
// QUESTION NO. 1: ARITHMETIC OPERATIONS
// ==========================================
var num = 10;
document.write("<h3>Question 1: Arithmetic Operations</h3>");
document.write("The value of num is: " + num + "<br>");
document.write("------------------------------------<br><br>");

// Pre-increment
++num;
document.write("The value of ++num is: " + num + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

// Post-increment
document.write("The value of num++ is: " + num++ + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

// Pre-decrement
--num;
document.write("The value of --num is: " + num + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

// Post-decrement
document.write("The value of num-- is: " + num-- + "<br>");
document.write("Now the value of num is: " + num + "<br>");
document.write("<hr>"); // Line break for next question


// ==========================================
// QUESTION NO. 2: STAGE EXPLANATION
// ==========================================
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("<h3>Question 2: Variables Output</h3>");
document.write("Value of a is: " + a + "<br>");
document.write("Value of b is: " + b + "<br>");
document.write("Final Result is: " + result + "<br>");
document.write("<hr>");


// ==========================================
// QUESTION NO. 3: USER GREETING
// ==========================================
document.write("<h3>Question 3: User Greeting</h3>");
var userName = prompt("Question 3: Please enter your name:");
if (userName !== null && userName !== "") {
    document.write("<h4>Welcome to our website, " + userName + "! Have a great day.</h4>");
} else {
    document.write("<h4>Welcome, Guest!</h4>");
}
document.write("<hr>");


// ==========================================
// QUESTION NO. 5: MULTIPLICATION TABLE
// ==========================================
document.write("<h3>Question 5: Multiplication Table</h3>");
var tableNumber = prompt("Question 5: Enter a number for multiplication table (Default is 5):", 5);

// Agar user cancel kare ya kuch na likhe to 5 ka table chale
tableNumber = tableNumber || 5; 

document.write("<h4>Table of " + tableNumber + "</h4>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}
document.write("<hr>");


// ==========================================
// QUESTION NO. 6: MARKSHEET GENERATOR
// ==========================================
document.write("<h3>Question 6: Marksheet Result</h3>");

// Subjects ke naam input lein
var sub1 = prompt("Question 6: Enter 1st subject name:");
var sub2 = prompt("Question 6: Enter 2nd subject name:");
var sub3 = prompt("Question 6: Enter 3rd subject name:");

// Total marks setup
var totalMarksPerSubject = 100;
var totalMaxMarks = totalMarksPerSubject * 3;

// Obtained marks input (+ lagane se text number ban jata hai)
var marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
var marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
var marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

// % calculations
var totalObtained = marks1 + marks2 + marks3;
var percentage1 = (marks1 / totalMarksPerSubject) * 100;
var percentage2 = (marks2 / totalMarksPerSubject) * 100;
var percentage3 = (marks3 / totalMarksPerSubject) * 100;
var totalPercentage = (totalObtained / totalMaxMarks) * 100;

// Table display karna
document.write("<table border='1' cellpadding='8' cellspacing='0' style='text-align: center; border-collapse: collapse;'>");
document.write("<tr style='background-color: #f2f2f2;'><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + percentage1 + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + percentage2 + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + percentage3 + "%</td></tr>");
document.write("<tr style='font-weight: bold;'><td>Total</td><td>" + totalMaxMarks + "</td><td>" + totalObtained + "</td><td>" + totalPercentage.toFixed(2) + "%</td></tr>");
document.write("</table>");