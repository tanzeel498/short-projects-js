const boxes = document.querySelectorAll(".box");

function checkBoxes() {
  const triggerBottom = window.innerHeight;

  boxes.forEach((box) => {
    if (triggerBottom > box.getBoundingClientRect().bottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

checkBoxes();

window.addEventListener("scroll", checkBoxes);
