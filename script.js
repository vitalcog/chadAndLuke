
fetch("http://jservice.io/api/random")
  .then(
    function(response) {
      response.json().then(function(data) {
        console.log(data);
        let questionBox = document.getElementById('questionText');
        let scoreBox = document.getElementById('score')

        question =`<p> ${data[0].question} </p>`;
        score = `${data[0].value}`;
        scoreBox.innerHTML = score;
        questionBox.innerHTML = question;
       });
       });
// let questionBox = document.getElementById('questionText');
// question =`<p> ${[response[0].question} </p>`;
// questionBox.innerHTML = question;
