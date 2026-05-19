// Q #1
let city = prompt("City Name");

if (city === "karachi") {
    alert("welcome to city of lights");
}

// Q #2
let gender = prompt("gender");

if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Maam");
}

// Q #3
let trafficColor = prompt("color of road traffic signal");

if (trafficColor === "red") {
    alert("Must Stop");
} else if (trafficColor === "yellow") {
    alert("Ready to move");
} else if (trafficColor === "green") {
    alert("Move now");
}

// Q #4
let fuel = +prompt("remaining fuel in the car");

if (fuel <= 0.25) {
    alert("Please refill the fuel in your car");
}

// Q #5
let a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is false");
}

let c = 12;
if (c++ === 13) {
    alert("condition 1 is false");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is false");
}
if (c === 14) {
    alert("condition 4 is true");
}

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Q #6
let english = +prompt("Marks obtain in English");
let urdu = +prompt("Marks obtain in Urdu");
let Maths = +prompt("Marks obtain in Mathematics");
let totalMarks = 300;
let obtainMarks = english + urdu + Maths;
let percentage = (obtainMarks / totalMarks) * 100;

if (percentage >= 80) {
    document.write(`Marks Sheet <br/> Total marks : ${totalMarks} <br/> Marks obtained : ${obtainMarks} <br/> Percentage : ${percentage} <br/> Grade : A-one <br/> Remarks : Excellent`);
} else if (percentage >= 70) {
    document.write(`Marks Sheet <br/> Total marks : ${totalMarks} <br/> Marks obtained : ${obtainMarks} <br/> Percentage : ${percentage} <br/> Grade : A <br/> Remarks : Good`);
} else if (percentage >= 60) {
    document.write(`Marks Sheet <br/> Total marks : ${totalMarks} <br/> Marks obtained : ${obtainMarks} <br/> Percentage : ${percentage} <br/> Grade : B <br/> Remarks : You need to improve`);
} else if (percentage < 60) {
    document.write(`Marks Sheet <br/> Total marks : ${totalMarks} <br/> Marks obtained : ${obtainMarks} <br/> Percentage : ${percentage} <br/> Grade : Fail <br/> Remarks : Sorry`);
}

// Q #7
let secretNumber = 3;
let guess = +prompt("guess the secret number");

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
}

++secretNumber;
if (guess === secretNumber) {
    alert("Close enough to the correct answer");
}

// Q #8
let number3 = +prompt("Give the number which is divided by 3");

if (number3 % 3 === 0) {
    alert("Correct");
}

// Q #9
let numberEvenOdd = +prompt("Give a number");

if (numberEvenOdd % 2 === 0) {
    alert("Even Number");
} else {
    alert("Odd Number");
}

// Q #10
let temperature = +prompt("What's the outside Temperature");

if (temperature >= 40) {
    alert("It is too hot outside");
} else if (temperature >= 30) {
    alert("The today Weather is Normal");
} else if (temperature >= 20) {
    alert("Today's Weather is Cool");
} else if (temperature >= 10) {
    alert("OMG! Today's weather is so Cool");
}

// Q #11
let firstNumber = +prompt("First number");
let secondNumber = +prompt("Second number");
let operation = prompt("Operation +, -, *, /, %");

if (operation === "+") {
    let result = firstNumber + secondNumber;
    alert(result);
} else if (operation === "-") {
    let result = firstNumber - secondNumber;
    alert(result);
} else if (operation === "*") {
    let result = firstNumber * secondNumber;
    alert(result);
} else if (operation === "/") {
    let result = firstNumber / secondNumber;
    alert(result);
} else if (operation === "%") {
    let result = firstNumber % secondNumber;
    alert(result);
}