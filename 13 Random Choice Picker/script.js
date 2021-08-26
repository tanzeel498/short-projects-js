const tagsTextArea = document.querySelector("#tags-area");
const tags = document.querySelector("#tags");

tagsTextArea.focus();

tagsTextArea.addEventListener("keyup", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    animateTags();
    return;
  }

  const tagsText = tagsTextArea.value.split(",");
  tags.innerHTML = tagsText
    .filter((tag) => tag.trim())
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
});

function animateTags() {
  const tagElements = document.querySelectorAll("#tags .tag");
  let counter = 0;
  let timer = setInterval(() => {
    const randNumber = Math.floor(Math.random() * tagElements.length);
    tagElements[randNumber].classList.add("highlight");
    if (counter > 10) {
      clearInterval(timer);
      return;
    }
    setTimeout(() => {
      tagElements[randNumber].classList.remove("highlight");
    }, 100);
    counter++;
  }, 200);
  tagsTextArea.value = "";
}
