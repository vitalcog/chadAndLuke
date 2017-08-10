let questionBox = document.getElementById('questionText');

let scoreBox = document.getElementById('points')

let catagoryBox = document.getElementById('catagory');

let submitB = document.getElementById('submitBox');

let answerBox = document.getElementById('answer');

let correctAnswer = document.getElementById('correctAnswer');

let playerScore = document.getElementById('score');

let buttonNext = document.getElementById('nextButton');

let resultButton = document.getElementById('result');

let totalScore = 0;

answerBox.textContent = "";
// big ole' function...
function nextP() {

  fetch("http://jservice.io/api/random")
    .then(
      function(response) {
        
        response.json().then(function(data) {

          console.log(data);
          question = `<p> ${data[0].question} </p>`;
          score = `${data[0].value}`;
          catagory = `${data[0].category.title}`;
          answer = `${data[0].answer}`;
          rightAnswer = `${data[0].answer}`;
          scoreBox.innerHTML = score;
          questionBox.innerHTML = question;
          catagoryBox.innerHTML = catagory;
          correctAnswer.innerHTML = rightAnswer;
        });
      });
}
//submit button, cant get this to += to get total play score, also needs to compare answerBox to the right //anwser and display right or wrong

//submitBox.addEventListener('click', function( {

//function that loads webpage once.

nextP();


//nextButton, class of next button to toggle, needs to clear answerBox and refresh question.

buttonNext.addEventListener('click', function() {
  nextP();
  answerBox.innerHTML = 0;
});
