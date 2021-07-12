const progress = document.querySelector("#progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
var currentState = 1;

next.addEventListener("click", () => {
    if(currentState < circles.length)
        currentState++;
    updateCircles();
});


prev.addEventListener("click", () => {
    if(currentState > 1)
        currentState--;
    updateCircles();
});

function updateCircles(){
    // setting the state of buttons depending upon the value of currentState
    if(currentState === 1){
        prev.disabled = true;
    } else if(currentState === circles.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    // setting the width of the progress
    progress.style.width = (currentState - 1) / (circles.length - 1) * 100 + "%";

    // setting the state of the circles
    circles.forEach((circle, index) => {
        if (index < currentState){
            setTimeout(() => {
                circle.classList.add("active");
            }, 200);
         } else {
            circle.classList.remove("active");
         }
    });
}