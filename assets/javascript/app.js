// Game loads with Start Button
// Timer countdown starts 
// User clicks Start and five questions load with for answer options
// Once the timer runs out screen display turns to "All done! Correct answers: Incorrect Answers: Unaswered:"

// DEFINE VARAIBLES

var counter = 0;
var correct = 0;
var inccorect = 0;
var unasnwered = 0;


var q1 = "Which actor doesn't like coffee in real life?";
var q2 = "Who speaks the first line in the series?";
var q3 = "Which major character was originally scripted as a woman?";
var q4 = "Which musician sings the Gilmore Girls theme song?";
var q5 = "What is the population of Stars Hollow?";

var a1 = ["Lauren Graham", "Alexis Bledel", "182 million", "205 million"];
var a2 = ["Luke", "Lorelai", "Sooki", "Rory"];
var a3 = ["Luke", "Lorelai", "Sooki", "Rory"];
var a4 = ["Carole King", "Lisa Loeb", "Jewel", "Beyonce"];
var a5 = ["9,973", "10,015", "8,567", "9,374"];


// DEFINE FUNCTIONS



// CALL FUNCTIONS

$('.question1').append(q1);
$('.question2').append(q2);
$('.question3').append(q3);
$('.question4').append(q4);
$('.question5').append(q5);

$(document).find(".quizContainer > .choiceList");

$('.choiseList1').append(a1);
$('.choiseList2').append(a2);
$('.choiseList3').append(a3);
$('.choiseList4').append(a4);
$('.choiseList5').append(a5);
