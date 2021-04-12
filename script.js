var questions = [{
    question: "When did Ghana gain independence?",
    choices: ["2021", "1960", "1957", "1975"],
    correctAnswer: 2
 }, 
{
    question: "When did Nigeria gain independence?",
    choices: ["2021", "1960", "1957", "1975"],
    correctAnswer: 1
}, {
    question: "Who was the first president of Ghana?",
    choices: ["K.A. Busia", "J.B Danquah", "Kwame Nkrumah", "Kofi Annan"],
    correctAnswer: 2
}, {
    question: "Where can you find the highest mountain in Africa?",
    choices: ["Nigeria", "Algeria", "South Africa", "Cameroun"],
    correctAnswer: 3
}, {
    question: "Corsica is a province of which country?",
    choices: ["France", "Malta", "Italy", "Portugal"],
    correctAnswer: 0
}, {
    question: "How many days are in a leap year?",
    choices: ["265", "366", "365", "266"],
    correctAnswer: 1
}, {
    question: "What is the currency of South Africa?",
    choices: ["Yen", "Shilling", "Kwatcha", "Rand"],
    correctAnswer: 3
}, {
    question: "Who is the author of novel, 'The Cather in the Rye?",
    choices: ["J.K Rowling", "Harper Lee", "J.D Salinger", "William Shakespeare"],
    correctAnswer: 2
},
 {
    question: "Which of the following is the biggest fish?",
    choices: ["Whale", "Shark", "Octupus", "Seal"],
    correctAnswer: 0
}, 
{
    question: "Where is the biggest mine in Africa?",
    choices: ["Ghana", "D.R Congo", "South Africa", "Tanzania"],
    correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function() {

    //Displaying the first question
    displayCurrentQuestion();
    $(this).find(".altMessage").hide();

    //Display next question on clicking next
    $(this).find(".nextButton").on("click", function() {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".altMessage").text("Please select an answer");
                $(document).find(".altMessage").show();
            } else {
                $(document).find("altMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;                   
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }        
    });
});

//Displaying the current question and choices
function displayCurrentQuestion() {
    var question = questions[currentQuestion].question;
    var questionClass = $(".mainBox").find(".question");
    var choiceList = $(".mainBox").find(".choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    //Setting the question text to the questionClass
    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(".mainBox").find(".result").text("You scored: " + correctAnswers/questions.length * 100 + "%");
    $("mainBox").find(".result").show();
    $(".mainBox").find(".choiceList").hide();
    $(".mainBox").find(".question").hide();
    var hero = $(".result");
    hero.animate({height: '100px'}, "slow");
    hero.animate({fontSize: '3em'}, "slow");

  
}

function hideScore() {
    $(document).find(".result").hide();
}