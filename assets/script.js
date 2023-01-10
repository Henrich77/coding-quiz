/* ####### create variables that I am going to need in order to start
##### create an object with the questions and answer choices and correct answer.
1 .must include a click event when start quiz is clicked so questions can then generate.
2 .the timer must also start once a question appears on the screen
3. when a question is answered correctly notify the user. ditto for when a question is incorrecly answered
4. when a question is answered wrong time must be subtracted
5. highscores must be daved to the local storage 
*/

// ##### create an object with the questions and answer choices and correct answer.

let startBtn = document.getElementById("button"); //this variable targets the start Quiz button.
var choicesDiv = document.createElement("button");
var index = 0;
var time = 60;
var timeInterval;


let questions = [{
    question: "The most commomly used data type DO NOT include?",
    choices:["A. Boolean","B. Integer","C. String","D. Variable"],
    answer: "Variable",
},

{ 
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["Script","Link","Js","None of the Above"],
    answer: "Script",
},
{
    question:"What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
    choices: ["clone", "variable","Loop","Boolean"],
    answer: "Loop",
},
{
    question: "What is considered to be the most popular programming language in the world?",
    choices: ["Jquery","JavaScript","HTML","Bootstrap"],
    answer: "JavaScript",
},
{
    question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
    choices: ["Strings","Variables","Function","Arrays"],
    answer: "Strings",
},
{
    question: " What is a JavaScript element that represents either TRUE or FALSE values?",
    choices:["Boolean","String","HTML","Condition"],
    answer: "Boolean",
},
{
    question: "What is the format called that is used for storing and transporting data?",
    choices: ["HTML","Day Js", "JSON","Syntax"],
    answer: "JSON",
}]





// let timer = document.getElementById("clock");
// let timerSecond = 80;

// timer.innerHTML = timerSecond;

var intro = document.getElementById("question");
var quizTitle = document.createElement("div")
quizTitle.innerHTML = "Welcome to the coding challenge click the start Quiz button to begin";
intro.appendChild(quizTitle);

var choicesDiv = document.createElement("button");
choicesDiv.className = "choices";




function quiz() {
    console.log(" Hey");
    startBtn.remove();
    quizTitle.innerHTML = "";
    var div = document.createElement("div");
    div.innerHTML =questions[index].question;
    console.log(questions[index].question);
    var divQuestion = document.getElementById("question");
    divQuestion.innerHTML = "";
    divQuestion.appendChild(div);



    for (var i = 0; i<questions[index].choices.length; i++) {

    var choicesDiv = document.createElement("button");
    choicesDiv.className = "choices";
    choicesDiv.innerHTML = questions[index].choices[i];
    divQuestion.appendChild(choicesDiv);
    choicesDiv.addEventListener("click",checkAnswer);
    
    

   

    


  
    

   


}


}

function startQuiz(){
    startBtn.addEventListener("click", function(){
        quiz();
        timer();
    });
    console.log("I am working");
}

function checkAnswer() {
    console.log("hey the choices are being clicked");
    
    var button = this.textContent

    var correct = document.getElementById("correct");
    

    if( button === questions[index].answer){

        console.log("your answer is correct")
        correct.textContent = "✅ Correct"
    } else {
        
        time -= 5
        /*time = time - 5
        this is another way to subtract the time */

        console.log(" your answer is incorrect")
        correct.className = "incorrect";
        correct.textContent = "❌ Incorrect"
    } 

    if (index < questions.length-1){
    index++;

    quiz()

    }

    


}

function timer () {

    var clock = document.getElementById("clock");
    clock.textContent = time;

    timeInterval = setInterval(() => {
        time--
        clock.textContent = time;

        if (time <= 0){
            clearInterval(timeInterval);
        }
    }, 1000);


    
}

startQuiz()
