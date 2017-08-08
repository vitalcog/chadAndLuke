console.log("hello");
fetch("http://jservice.io/api/random")
  .then(
    function(response) {
      response.json().then(function(data) {
        console.log(data);
      })
    });
let questionBox = document.getElementById('questionText');
question =`<p>${data[0].question}</p>`;
