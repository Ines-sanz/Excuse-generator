/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "My goldfish ",
    "An alien ",
    "The pizza delivery guy ",
    "My clone "
  ];
  let action = ["burnt ", "froze ", "stole ", "hid "];
  let what = [
    "the Wi-Fi router ",
    "my keys ",
    "the car ",
    "the secret formula "
  ];
  let when = [
    "when I wasn't looking",
    "right before the deadline",
    "while I was at the cinema",
    "during my hollidays",
    "during the zombie apocalypse"
  ];

  let n1 = Math.floor(Math.random() * who.length);
  let n2 = Math.floor(Math.random() * action.length);
  let n3 = Math.floor(Math.random() * what.length);
  let n4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[n1] + action[n2] + what[n3] + when[n4];
};
