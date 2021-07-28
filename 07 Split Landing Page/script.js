const splitLeft = document.querySelector(".container .left");
const splitRight = document.querySelector(".container .right");

splitRight.addEventListener("mouseenter", function () {
  this.classList.add("active");
});
splitRight.addEventListener("mouseleave", function () {
  this.classList.remove("active");
});

splitLeft.addEventListener("mouseenter", function () {
  this.classList.add("active");
});
splitLeft.addEventListener("mouseleave", function () {
  this.classList.remove("active");
});
