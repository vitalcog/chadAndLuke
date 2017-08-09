
let questionBox = document.getElementById('questionText');

let scoreBox = document.getElementById('points')

let catagoryBox = document.getElementById('catagory');

let submitBox = document.getElementById('submit');

let answerBox = document.getElementById('answer');

let correctAnswer = document.getElementById('correctAnswer');

// big ole' function...
fetch("http://jservice.io/api/random")
  .then(
    function(response) {
      response.json().then(function(data) {
        console.log(data);
        question =`<p> ${data[0].question} </p>`;
        score = `${data[0].value}`;
        catagory = `${data[0].category.title}`;
        //Added totalScore here, doesnt do anything but will need to be linked to submit buttin to cal. players total score
        totalScore = score + scoreBox.innerHTML;
        scoreBox.innerHTML = score;
        questionBox.innerHTML = question;
        catagoryBox.innerHTML = catagory;
        scoreBox.innerHTML = totalScore
       });
       });

// let questionBox = document.getElementById('questionText');
// question =`<p> ${[response[0].question} </p>`;
// questionBox.innerHTML = question;
