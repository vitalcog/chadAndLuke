
let questionBox = document.getElementById('questionText');

let scoreBox = document.getElementById('points')

let catagoryBox = document.getElementById('catagory');

let submitBox = document.getElementById('submit');

let answerBox = document.getElementById('answer');

let correctAnswer = document.getElementById('correctAnswer');

let playerScore = document.getElementById('score');

// big ole' function...
fetch("http://jservice.io/api/random")
  .then(
    function(response) {
      response.json().then(function(data) {
        console.log(data);
        question =`<p> ${data[0].question} </p>`;
        score = `${data[0].value}`;
        catagory = `${data[0].category.title}`;
        answer = `${data[0].answer}`;
        totalScore = playerScore + scoreBox;
        rightAnswer = `${data[0].answer}`;
        //playerScore.innerHTML = score;
        //scorebox.innerHTML = totalScore;
        scoreBox.innerHTML = score;
        questionBox.innerHTML = question;
        catagoryBox.innerHTML = catagory;
        //scoreBox.innerHTML = playerScore;
        correctAnswer.innerHTML = rightAnswer;
        playerScore.innerHTML += score;
  // If statment for right/ wrong answer
if(rightAnswer === answerBox.innerHTML){
  score += totalScore;

} else{playerScore }

       });
       });

// let questionBox = document.getElementById('questionText');
// question =`<p> ${[response[0].question} </p>`;
// questionBox.innerHTML = question;
