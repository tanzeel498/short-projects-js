const jokeButton = document.querySelector(".container .btn");
const joke = document.querySelector(".container .joke");

/*
function getRandomJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => (joke.innerHTML = data.joke));
}
*/

async function getRandomJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  joke.innerHTML = data.joke;
}

getRandomJoke();

jokeButton.addEventListener("click", getRandomJoke);
