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
console.log(answerBox.value);
console.log(correctAnswer.innerHTML)
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

        });
      });
}
//submit button, cant get this to += to get total play score.
//Its comparing the two but because we are entering the text i dont its reading it correctly, maybe its //location of code... I dunno.
  submitBox.addEventListener('click', function() {
  if(answerBox.value === correctAnswer.innerHTML){
    return resultButton.innerHTML = 'Right!!'
  }else {
    return correctAnswer.innerHTML = rightAnswer;
  }
})
//function that loads webpage once.
nextP();


//buttonNext is clearing the answerBox and refreshing the question, still acting a little wonky in other states
// Its not clearing the correctAnswer either
 buttonNext.addEventListener('click', function() {
nextP()
   return answerBox.value = '';
    resultButton.innerHTML = '';

 })
