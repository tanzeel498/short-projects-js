const sounds = document.querySelectorAll(".sound");
var playingSound = null;

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound.getAttribute("id");

  document.querySelector("#buttons").appendChild(button);
  button.addEventListener("click", playSound);
});

function playSound(e) {
  if (playingSound !== null) {
    playingSound.pause();
    playingSound.currentTime = 0;
  }
  playingSound = document.querySelector(`#${e.target.textContent}`);
  playingSound.play();
}
