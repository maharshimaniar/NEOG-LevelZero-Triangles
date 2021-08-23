const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputEl = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  if (Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0) {
    outputEl.innerText = "Please enter Valid Inputs."
  }
  else {
    console.log(Number(sides[0].value));
    const sumOfSquares = calculateSumOfSquare(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }

}

calculateBtn.addEventListener("click", calculateHypotenuse);
