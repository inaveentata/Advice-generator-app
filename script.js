"use strict";
const idEl = document.getElementById("id");
const adviceEl = document.getElementById("advice");
const diceIcon = document.querySelector(".dice-icon");
const url = `https://api.adviceslip.com/advice`;

diceIcon.addEventListener("click", () => {
  const randomNum = Math.ceil(Math.random() * 500);
  fetch(`${url}/${randomNum}`)
    .then((resp) => resp.json())
    .then(({ slip }) => {
      const { id, advice } = slip;
      idEl.textContent = id;
      adviceEl.textContent = advice;
    });
});
