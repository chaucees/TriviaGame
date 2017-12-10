// TIMER
var startTimer = new Date;

setInterval(function() {
    $('#timer').text((new Date - startTimer) / 1000 + " Seconds");
}, 1000);

// somehow need to tell the timer to wait to load until the start button is clicked.
// Once the timer runs out screen display turns to "All done! Correct answers: Incorrect Answers: Unaswered:"


// START BUTTON
$('.startButton').on('click', function () {
    $('.startButton').remove().on('click', startTimer());
    displayQuestion();
});

// User clicks Start and five questions load with for answer options...questions shoudld be hid before that.


// DEFINE VARAIBLES

var counter = 0;
var correct = 0;
var inccorect = 0;
var unasnwered = 0;

var q1 = "Which actor actually doesn't like coffee?";
var q2 = "Who speaks the first line in the series?"
var q3 = "Which major character was originally scripted as a woman?";
var q4 = "Which musician sings the Gilmore Girls theme song?";
var q5 = "What is the population of Stars Hollow?";

var a1 = ["Lauren Graham ", "Alexis Bledel ", "Scott Patterson ", "Kelly Bishop "];
var a2 = ["Luke ", "Lorelai ", "Sooki ", "Rory "]; 
var a3 = ["Luke ", "Lorelai ", "Sooki ", "Rory "];
var a4 = ["Carole King ", "Lisa Loeb ", "Jewel ", "Beyonce "];
var a5 = ["9,973 ", "10,015 ", "8,567 ", "9,374 "];



// DEFINE FUNCTIONS

// Function to compare user choice against the correct answers
// If user choice is correct then icrease var correct by one
// If user choice is incorrect then icrease var incorrect by one
// if user selects no choice for a question increase var unanswered by one
// Submit function
    


// CALL FUNCTIONS

$('.question1').append(q1);
$('.question2').append(q2);
$('.question3').append(q3);
$('.question4').append(q4);
$('.question5').append(q5);

$('.choiceList1').append(a1);
$('.choiceList2').append(a2);
$('.choiceList3').append(a3);
$('.choiceList4').append(a4);
$('.choiceList5').append(a5);




