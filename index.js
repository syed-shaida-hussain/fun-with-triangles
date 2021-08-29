const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3= document.querySelector("#angle3");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output");

function isTriangle(){
    const SumOfAngles = Number(angle1.value)  +  Number(angle2.value) +  Number(angle3.value);
    if(SumOfAngles === 180){
        outputBox.innerText = "The angles entered form a triangle";
    }
    else{
        outputBox.innerText = "The angles entered do not form a triangle";
    }

}

isTriangleBtn.addEventListener("click",isTriangle)

