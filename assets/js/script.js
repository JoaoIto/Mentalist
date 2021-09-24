let result = document.getElementById("result-number");
let numberResult = document.getElementById("descripition-result");

let numberMentalist = document.getElementById("value-mentalist");

let randomNumber = Math.floor(Math.random() * 10);

function mentalist() {
  if (numberMentalist.value = randomNumber.value) {
    result.classList.add("correct");
    result.innerHTML = "Correto!";
  } else{
    result.classList.add("wrong");
    result.innerHTML = "Errado!";
    numberResult.innerHTML = `O número pensado foi: ${randomNumber}`;
  }
}
