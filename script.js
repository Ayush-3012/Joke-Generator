// grab a reference for necessary HTML elements

const jokeText = document.querySelector(".joke-text"); // .joke-text
const newJokeBtn = document.querySelector(".new-joke-btn"); // .new-joke-btn

newJokeBtn.addEventListener("click", getJoke); // add 'click' eventListener to .new-joke-btn

getJoke(); // immediately call getJoke() for first joke

// getJoke() function definition
function getJoke() {
  /* Generating Random colors for text */
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));

  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);

  // make an API request to https://icanhazdadjoke.com/'
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      /* convert Stringified JSON response to Javascript Object */
      return response.json();
    })
    .then(function (data) {
      /* replace innerText of .joke-text with data.joke */
      // extract the joke text
      const joke = data.joke;
      // do the replacement
      jokeText.innerText = joke;
    });

  jokeText.style.color = `rgb(${r},${g},${b})`;
}
