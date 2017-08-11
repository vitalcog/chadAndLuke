

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

//
answerBox = answerBox.textContent;
answerBox.textContent = "";
// big ole' function...
function nextP (){

fetch("http://jservice.io/api/random")
  .then(
    function(response) {
      response.json().then(function(data) {
        console.log(data);
        question =`<p> ${data[0].question} </p>`;
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
      //submitBox.addEventListener('click', function(

buttonNext.addEventListener('click', function() {
nextP();
//answerBox.innerHTML = 0;
});


nextP();


//next button new fetch w/ url, class of next button to toggle;

//       });
  //     });




// If statment for right/ wrong answer
// if(rightAnswer === answerBox.innerHTML){
//   score += totalScore;
//
// } else{
//}
nextP();



// let questionBox = document.getElementById('questionText');
// question =`<p> ${[response[0].question} </p>`;
// questionBox.innerHTML = question;
