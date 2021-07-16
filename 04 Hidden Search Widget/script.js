const search = document.querySelector(".search");
const searchButton = document.querySelector(".search .btn");
const searchInput = document.querySelector(".search .input");

searchButton.addEventListener("click", (e) => {
  if (!search.classList.contains("active")) searchInput.focus();
  search.classList.toggle("active");
});
