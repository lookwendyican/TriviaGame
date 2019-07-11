
// Setting up array for multiple choice questions. 

var allQuestions = [{
  question: "This animal's name means river horse. What is the name of this very large animal that is usually found standing in the water?",
  choices: ["Warthog", "Hippopotamus", "Rhinocerus", "Alligator"],
  correctAnswer: 1
},

{
  question: "This feline is the largest of Africa’s cats, spending its days lounging in the sun. It hunts big game such as zebra and wildebeest during early morning and evening hours:",
  choices: ["Leopard", "Caracal", "Cheetah", "Lion"],
  correctAnswer: 3
},

{
  question: "The term Big Five refers to:",
  choices: ["Cheetah, giraffe, lion, great antelope, elephant", "Wildebeest, lion, zebra, elephant, rhinocerus", "Cape buffalo, lion, leopard, elephant, rhinoceros", "Hippo, crocodile, gorilla, rhinocerus, leopard"],
  correctAnswer: 2
},

{
  question: "Elephants are the largest land animals and are incredibly intelligent creatures. Which of the following traits do humans & elephants share?",
  choices: ["Long-term memory", "Form deep family bonds", "Bury their dead", "All of the above"],
  correctAnswer: 3
},

{
  question: "Venom has little effect on this thick-skinned, fearless creature that can kill and eat snakes (even the deadly black mamba!) and also has a particular fondness for bee larvae:",
  choices: ["Meerkat", "Honey Badger", "Serval", "Bar-eared fox"],
  correctAnswer: 1
},
];
var currentquestion = 0;
var correctAnswers = 0;

//  Interval Demonstration.  Set our number counter to 60.
var number = 60;

var intervalId;

//  When the stop button gets clicked, run the stop function.
$("#stop").on("click", stop);

//  When the resume button gets clicked, execute the run function.
$("#resume").on("click", run);


function run() {
clearInterval(intervalId);
intervalId = setInterval(decrement, 1000);
}


function decrement() {
number--;
//  Show the number in the #show-number tag.
$(".show-number").text("Time Remaining: "  + number);
//  Once number hits zero...
if (number === 0) {
//  ...run the stop function.
stop();
//  Alert the user that time is up.
alert("Time's Up!");
}
}

//  The stop function
function stop() {

clearInterval(intervalId);
}

//  Execute the run function.




//Seeting up methods for startup
function setupOptions() {
$('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
var options = allQuestions[currentquestion].choices;
var formHtml = '';
for (var i = 0; i < options.length; i++) {
formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
allQuestions[currentquestion].choices[i] + '</label></div><br/>';
}
$('#form').html(formHtml);
$("#option0").prop('checked', true);
};

function checkAns() {
if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
correctAnswers++;
};
};



$(document).ready(function() {

$("#playarea").hide();

$('#start').click(function() {
$("#playarea").fadeIn();
$(".show-number").show();
$(this).hide();
run();
});

$(function() {
$("#progressbar").progressbar({
max: allQuestions.length - 1,
value: 0
});
});



setupOptions();

$("#next").click(function() {
event.preventDefault();
checkAns();
currentquestion++;
$(function() {
$("#progressbar").progressbar({
  value: currentquestion
});
});
if (currentquestion < allQuestions.length) {
setupOptions();
if (currentquestion == allQuestions.length - 1) {
  $('#next').html("Submit");
  $('#next').click(function() {
    $("#playarea").hide();
    $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
    $("#result").fadeIn(1500);
  });

};

};
});

// set interval



});
