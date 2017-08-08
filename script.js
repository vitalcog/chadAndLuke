
let questionBox = document.getElementById('questionText');
let scoreBox = document.getElementById('score')
let catagoryBox = document.getElementById('catagory');
fetch("http://jservice.io/api/random")
  .then(
    function(response) {
      response.json().then(function(data) {
        console.log(data);
        question =`<p> ${data[0].question} </p>`;
        score = `${data[0].value}`;
        catagory = `${data[0].category.title}`;
        scoreBox.innerHTML = score;
        questionBox.innerHTML = question;
        catagoryBox.innerHTML = catagory
       });
       });
// let questionBox = document.getElementById('questionText');
// question =`<p> ${[response[0].question} </p>`;
// questionBox.innerHTML = question;
