/* ####### create variables that I am going to need in order to start
##### create an object with the questions and answer choices and correct answer.
1 .must include a click event when start quiz is clicked so questions can then generate.
2 .the timer must also start once a question appears on the screen
3. when a question is answered correctly notify the user. ditto for when a question is incorrecly answered
4. when a question is answered wrong time must be subtracted
5. highscores must be daved to the local storage 
*/

// ##### create an object with the questions and answer choices and correct answer.

const questions = [{
    question: "The most commomly used data type DO NOT include?",
    choices:["Boolean","Integer","String","Variable"],
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
}]