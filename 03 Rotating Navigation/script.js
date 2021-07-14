const closeBtn = document.querySelector("#close");
const openBtn = document.querySelector("#open");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");

openBtn.addEventListener("click", () => container.classList.add("show-nav"));

closeBtn.addEventListener("click", () =>
  container.classList.remove("show-nav")
);
