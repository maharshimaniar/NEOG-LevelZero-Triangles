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
  if (Number(inputs[0].value) <= 0 && Number(inputs[1].value) <= 0 && Number(inputs[2].value) <= 0) {
    outputEl.innerHTML = "Please Enter valid Inputs.<br>Angle should be <span class='output-span'> > 0</span>";
  }
  else {
    if (sum === 180) {
      outputEl.innerText = "Yay!! The Angles form a Triangle! 😄";
    } else {
      outputEl.innerText = "Oh No! The Angle doesn't form a Triangle ☹️";
    }
  }

}

isTriangleBtn.addEventListener("click", isTriangle);
