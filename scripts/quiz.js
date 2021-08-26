const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

const correctAnswers = [
  "obtuse triangle",
  "acute triangle",
  "isosceles triangle",
  "right triangle",
  "equilateral triangle",
  "perimeter",
  "hypotenuse",
  "true",
  "5",
  "180°",
];

function calculateScore() {
  const formResults = new FormData(quizform);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  if(score===10){
    console.log(score);
    outputEl.innerHTML = "Wohoo!!🥳 You scored perfect " + "<span class='output-span'>"+score+"</span>";
  }
  else if(score>=4 && score<10){
    console.log(score);
    outputEl.innerHTML = "Wohoo!!😁 Your score is " + "<span class='output-span'>"+score+"</span>";
  }
  else{
    console.log(score);
    outputEl.innerHTML = "Your score is " + "<span class='output-span'>"+score+"</span><br>" + "Better Luck Next  Time!!👍";
  }
}

submitBtn.addEventListener("click", calculateScore);
