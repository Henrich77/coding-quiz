/* ####### create variables that I am going to need in order to start
##### create an object with the questions and answer choices and correct answer.
1 .must include a click event when start quiz is clicked so questions can then generate.
2 .the timer must also start once a question appears on the screen
3. when a question is answered correctly notify the user. ditto for when a question is incorrecly answered
4. when a question is answered wrong time must be subtracted
5. highscores must be daved to the local storage 
*/

// ######## create an object with the questions and answer choices and correct answer.

let startBtn = document.getElementById("button"); //this variable targets the start Quiz button.
var divQuestion = document.getElementById("question");
var clock = document.getElementById("clock");
var correct = document.getElementById("correct");
// var choicesDiv = document.createElement("button");
var index = 0; // ####### this is the Questions index
var time = 60;; // ######## this is the amount of time on the timer
var timeInterval;  // ######## this is used in the timer function

// ########### this is my array of questions, choices, and answers.
let questions = [{
    question: "The most commomly used data type DO NOT include?",
    choices: ["Boolean", "Integer", "String", "Variable"],
    answer: "Variable",
},

{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["Script", "Link", "Js", "None of the Above"],
    answer: "Script",
},
{
    question: "What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
    choices: ["Clone", "Variable", "Loop", "Boolean"],
    answer: "Loop",
},
{
    question: "What is considered to be the most popular programming language in the world?",
    choices: ["Jquery", "JavaScript", "HTML", "Bootstrap"],
    answer: "JavaScript",
},
{
    question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
    choices: ["Strings", "Variables", "Function", "Arrays"],
    answer: "Strings",
},
{
    question: " What is a JavaScript element that represents either TRUE or FALSE values?",
    choices: ["Boolean", "String", "HTML", "Condition"],
    answer: "Boolean",
},
{
    question: "What is the format called that is used for storing and transporting data?",
    choices: ["HTML", "Day Js", "JSON", "Syntax"],
    answer: "JSON",
}]





// ######## this is the beginning message when the page loads
var intro = document.getElementById("question");
var quizTitle = document.createElement("div")
quizTitle.innerHTML = "Welcome to the coding challenge click the start Quiz button to begin";
intro.appendChild(quizTitle);



//############# creating the choices div and the questions div on a global scope so I could use it in the setHighScore()



// this is the main function of the quiz
function quiz() {
    console.log(" Hey");
    startBtn.remove(); // ######## this removes the start quiz button when the page loads
    quizTitle.innerHTML = ""; // ####### this removes the welcome message once the start quiz button is clicked
    let div = document.createElement("div"); // ####### this dynamically creates the div that will display my questions
    div.innerHTML = questions[index].question; // ######## adding the questions to the div
    console.log(questions[index].question);
    // var divQuestion = document.getElementById("question");
    divQuestion.innerHTML = "";
    divQuestion.appendChild(div); // ####### this adds the question to the page


    // ######### this is the for loop for the choices
    for (var i = 0; i < questions[index].choices.length; i++) {

        var choicesDiv = document.createElement("button"); // ##### this creates a button for the choices
        choicesDiv.className = "choices"; //##### this adds a class name to the buttons to style them
        choicesDiv.innerHTML = questions[index].choices[i]; // ####### this puts the choices in the div
        divQuestion.appendChild(choicesDiv); //######### this adds the page
        choicesDiv.addEventListener("click", checkAnswer); // #### this adds a click event listener to the choices buttons












    }


}
// ######### this function starts the quiz once the button is clicked and displays the timer as well
function startQuiz() {
    startBtn.addEventListener("click", function () {
        quiz();
        timer();
    });
    console.log("The quiz is working ");
}
// ########## this function informs the user wether the question is right or wrong and also loads the next question on the page
function checkAnswer() {
    console.log("hey the choices are being clicked");

    var button = this.textContent

    if (button === questions[index].answer) {

        console.log("your answer is correct")
        correct.textContent = "✅ Correct"

    } else {

        time -= 5
        /*time = time - 5
        this is another way to subtract the time */

        console.log(" your answer is incorrect")
        correct.textContent = "❌ Incorrect"
    }

    if (index < questions.length - 1) {
        index++;

        quiz()

    } else {
        clearInterval(timeInterval);
        setHighscore()
    }






}
// ######### this is the timer function
function timer() {


    clock.textContent = time;

    timeInterval = setInterval(() => {
        time--
        clock.textContent = time;

        // if (questions[i])

        if (time <= 0) {
            clearInterval(timeInterval);
            GameOver();
        }
    }, 1000);



}

function GameOver() {

    var message = document.createElement("p")
    message.textContent = " Game Over"
    var MessageText = document.getElementById("clock");
    MessageText = "";
    MessageText.append(message);
}

function setHighscore() {
    divQuestion.innerHTML = ""
    correct.innerHTML = ""

    let message = document.getElementById('score')
    let submit = document.getElementById('send')

    let highscore = document.createElement('div');
    highscore.className = "highscore"
    highscore.innerHTML = " Game over! Thank you for playing , please enter your name below to save your score"
    let input = document.createElement('input')
    input.className = "input"
    let subBtn = document.createElement('button')
    subBtn.className = "subBtn"
    subBtn.innerHTML = "Submit"
    submit.appendChild(subBtn)
    divQuestion.appendChild(highscore)
    divQuestion.appendChild(input)
    divQuestion.appendChild(subBtn)

    subBtn.onclick = function() {

        let inputValue = input.value;
        var score = clock.value;
        console.log(inputValue);
        console.log(time)

        // if (iV) {
        //     localStorage.setItem('score', iV)
        //     location.reload()
        // }



    }






}

startQuiz()
// console.log(GameOver)

