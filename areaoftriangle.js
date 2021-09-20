const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const side3 = document.querySelector("#side3");
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
const outputBox = document.querySelector("#output-box");

// function compareValues(a, b, c) {
//     if (side1 > side2 && side1 > side3) {
//         area = 1 / 2 * (Number(side2.value) * Number(side3.value));
//     } else if (side2 > side1 && side2 > side3) {
//         area = 1 / 2 * (Number(side1.value) * Number(side3.value));
//     } else if (side3 > side1 && side3 > side2) {
//         area = 1 / 2 * (Number(side1.value) * Number(side2.value));
//     } else {
//         area = 1 / 2 * (Number(side1.value) * Number(side2.value));
//     }
//     return area;
// }

// function calculateArea() {
//     compareValues();
//     outputBox.innerText = "the area is " + area;
//     console.log(side1.value);
// }

function calculateArea(event) {
    event.preventDefault();
  
    const side1Value = Number(side1.value);
    const side2Value = Number(side2.value);
    const side3Value = Number(side3.value);
  
    if (
      side1Value + side2Value > side3Value &&
      side1Value + side3Value > side1Value &&
      side1Value + side3Value > side2Value
    ) {
      const semiPerimeter =
        (side1Value + side2Value + side3Value) / 2;
  
      const result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - side1Value) *
          (semiPerimeter - side2Value) *
          (semiPerimeter - side3Value)
      ).toFixed(4);
      outputBox.innerText = `Area of a triangle using heron's formula is ${result} units`;
    } else {
      outputBox.innerText = "Enter valid side measurements";
    }
  }

calculateAreaBtn.addEventListener("click", calculateArea);