const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputEl = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  if (Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0) {
    outputEl.innerHTML = "Please enter Valid Inputs.<br>Length should be <span class='output-span'> > 0</span>"
  }
  else {
    console.log(Number(sides[0].value));
    const sumOfSquares = calculateSumOfSquare(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerHTML = "The length of hypotenuse is <span class='output-span'>"+  lengthOfHypotenuse.toFixed(3) +"</span>";
  }

}

calculateBtn.addEventListener("click", calculateHypotenuse);
