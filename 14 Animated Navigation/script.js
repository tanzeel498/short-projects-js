const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  toggle.parentElement.classList.toggle("active");
});
