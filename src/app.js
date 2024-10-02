/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const who = [
    "My goldfish ",
    "An alien ",
    "The pizza delivery guy ",
    "My clone "
  ];
  const action = ["burnt ", "froze ", "stole ", "hid "];
  const what = [
    "the Wi-Fi router ",
    "my keys ",
    "the car ",
    "the secret formula "
  ];
  const when = [
    "when I wasn't looking",
    "right before the deadline",
    "while I was at the cinema",
    "during my hollidays",
    "during the zombie apocalypse"
  ];

  const getRandom = arra => Math.floor(Math.random() * arra.length);
  const getValue = arra => arra[getRandom(arra)];

  document.querySelector("#excuse").innerHTML = `${getValue(who)} ${getValue(
    action
  )} ${getValue(what)} ${getValue(when)}`;
};
