$('#start').on('click', function() {
    // we are adding a click function to the id of the button we created.
    //when the button is clicked the following function will run. 
    //game.start-start is a method of the object game we created.  
    game.start();
    console.log("button works");
})


$(document).on('click', '#end', function() {
    // have to use document. on ( click) because #end doesn't exist at the time the document is loaded, 
    //now it will be able to find the done button.
    //within the document we are appending a click function on the id of the end button we are creating.
    //when that button is clicked the following function will run.
    //the game.done- done is the method of the object game we created.
    //done is a function that tallies up the number of correct, unanswered, and incorrect questions.
    game.done();
})


var questionArray = [{
    question: "What Lightsaber Form Does Luke Skywalker Master?",
    answers: ["Soresu", "Shii-Cho", "Djem So", "Makashi"],
    correctAnswer: "Djem So"
},
{
    question: "Form III Soresu was developed due to the emergence of what?",
    answers: ["Sith", "Rankors", "Dark Jedi", "Blasters"],
    correctAnswer: "Blasters"
}, {

    question: "How Old Is Master Yoda when he dies?",
    answers: ["94", "900", "150", "436"],
    correctAnswer: "900"
},
{
    question: "What Sith Lord Corrupted Ben Solo at Birth",
    answers: ["Bane", "Snoke", "Plagious", "Revan"],
    correctAnswer: "Snoke"
},
{
    question: "What Sith Instituted The Rule of Two ",
    answers: ["Darth Revan", "Darth Kadius", "Darth Bane", "Naga Sedow"],
    correctAnswer: "Darth Bane"
}
];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            game.done();//this method will run
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);// every 1000 milliseconds its going to run the game.countdown function.
        $('#subwrapper').prepend('<h2> Time Remaining: <span id="counter">20</span>  Seconds</h2>');
        //will add the time remaining to the game.
        $('#start').remove(); //this will remove the start button, to allow the trivia questions to appear.
        //in the for loops, we are assigning an h2 for all questions, the input type of radio for all answers.
        //The values will include the name equal to the number of the question and value equal to the answer.
        // This will allow you to store the value within the buttons themselves.

        for (var i = 0; i < questionArray.length; i++) {
            $('#subwrapper').append('<h2>' + questionArray[i].question + '</h2>');
            for (var j = 0; j < questionArray[i].answers.length; j++) {
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questionArray[i].answers[j] + "' >" + questionArray[i].answers[j])
                // we are telling the program to append a name which is equal to the numer of the question,
                // with an input type of radio and a value that is equal to the answer. (this will allow us to store the answers in the buttons themselves.)
            }
        }
        $('#subwrapper').append('<br><button id="end"  class="btn btn-success ">DONE</button>')
        //dynamically adding an id to a button we are creating within the id of the subwrapper.
    },
    done: function() { //in charge of checking if each answer is correct of incorrect
        $.each($('input[name="question-0"]:checked'), function() {
            //we are going to check each element in our questions array of objects
            if ($(this).val() == questionArray[0].correctAnswer) {//if the value selected is equal to the correct answer we are going to increase the total by one.
                game.correct++;
            } else { // if the value selected(this).val is not correct, we are going to increase the incorrect answers by one.
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function() {
            // each allows us to check each element inside the parenthesis ( i.e any input type that has the name of question-1 and is checked 
            //(which means the radio button is selected))
            if ($(this).val() == questionArray[1].correctAnswer) {
                game.correct++;
                //if the value of the checked question 1 is equal to the correct answer from our questions array then we are going to increase the correct answer by 1,
                //else if not we are going to increase our incorrect answers by 1. we are going to repeat this behavior for all of our questions.
            } else {
                game.incorrect++;
            }
            console.log(this.value);
        });
        $.each($('input[name="question-2"]:checked'), function() {
            if ($(this).val() == questionArray[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
            console.log(this.value);
        });
        $.each($('input[name="question-3"]:checked'), function() {
            if ($(this).val() == questionArray[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
            console.log(this.value);
        });
        $.each($('input[name="question-4"]:checked'), function() {
            if ($(this).val() == questionArray[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
            console.log(this.value);
        });

        this.result();//results page / will print the results of the game. ( This is in reference to the object of the game)
    },

    result: function() {
        clearInterval(timer); // will remove the time remaining and timer.
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2> All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers:" + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers:" + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3> Unanswered:" + (questionArray.length - (this.incorrect + this.correct)) + "</h3>");
    }

}