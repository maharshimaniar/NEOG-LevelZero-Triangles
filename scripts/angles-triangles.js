const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 0) {
    outputEl.innerText = "Please enter valid Inputs.";
  }
  else {
    if (sum === 180) {
      outputEl.innerText = "Yay, the angles form a Triangle!";
    } else {
      outputEl.innerText = "Oh No! The angle doesn't form a Triangle";
    }
  }

}

isTriangleBtn.addEventListener("click", isTriangle);
