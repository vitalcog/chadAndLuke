
fetch("http://jservice.io/api/random")
  .then(
    function(response) {
      response.json().then(function(data) {
        let questionBox = document.getElementById('questionText');
        question =`<p> ${data[0].question} </p>`;
        questionBox.innerHTML = question;
       });
       });
// let questionBox = document.getElementById('questionText');
// question =`<p> ${[response[0].question} </p>`;
// questionBox.innerHTML = question;
