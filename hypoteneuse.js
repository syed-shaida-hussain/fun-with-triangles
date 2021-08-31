const sideInput = document.querySelectorAll(".side-input");
const calculateHypoteneuseBtn = document.querySelector("#calculate-hypoteneuse-btn");
const outputBox = document.querySelector("#output-box");

function calculateSumOfSides (a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares ;
}

function calculateHypoteneuse(){
    const sumOfSquares = calculateSumOfSides(Number(sideInput[0].value), Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputBox.innerText = "The length of hypotenuse is " +lengthOfHypotenuse;
}

calculateHypoteneuseBtn.addEventListener("click", calculateHypoteneuse);