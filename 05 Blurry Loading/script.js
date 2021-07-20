const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
var percentageComplete = 0;

var loadingInterval = setInterval(unblurring, 30);

function unblurring() {
  loadingText.textContent = percentageComplete + "%";
  loadingText.style.opacity = `${1 - (percentageComplete * 1) / 100}`;
  bg.style.filter = `blur(${30 - (percentageComplete * 30) / 100}px)`;
  if (percentageComplete >= 100) clearInterval(loadingInterval);
  percentageComplete++;
}
