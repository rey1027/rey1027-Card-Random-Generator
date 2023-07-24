/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const Handlebutton = e => {
  console.log(e);
  return;
};

window.onload = function() {
  let body = document.querySelector("body");
  console.log(body);
  body.classList.add("bg", "bg-success");

  let newdiv = document.createElement("DIV");
  let app = document.querySelector("#app");
  newdiv.classList.add(
    "container",
    "bg",
    "bg-white",
    "my-3",
    "border",
    "border-dark",
    "card"
  );
  newdiv.innerHTML = `<div class="row symbol heading">Simbolo</div> <div class="row number">numero</div> <div class="row symbol reverse">Simbolo</div>`;

  app.appendChild(newdiv);

  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomnumber = Math.floor(Math.random() * numbers.length);

  let number = document.querySelector(".number");
  number.classList.add("text-center", "d-flex", "justify-content-center");
  number.innerHTML = `${numbers[randomnumber]}`;

  let suit = [
    { suit: "♦", color: "text-danger" },
    { suit: "♥", color: "text-danger" },
    { suit: "♠", color: "text-dark" },
    { suit: "♣", color: "text-dark" }
  ];

  let randomsuit = Math.floor(Math.random() * suit.length);

  let symbolS = document.querySelector(".heading");
  symbolS.classList.add(suit[randomsuit].color);
  symbolS.innerHTML = `${suit[randomsuit]["suit"]}`;

  let symbolE = document.querySelector(".reverse");
  symbolE.classList.add(suit[randomsuit].color);
  symbolE.innerHTML = `${suit[randomsuit].suit}`;

  let button = document.createElement("BUTTON");
  let textButton = document.createTextNode("Generator Card");
  button.appendChild(textButton);
  button.classList.add("btn", "btn-dark", "mt-3", "ms-5");
  button.addEventListener("click", () => location.reload());
  body.appendChild(button);
};
