/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const button = document.querySelector("#Execute");

button.addEventListener("click", number);

function number() {
  //write your code here
  function element(group) {
    let RanNumber = Math.floor(Math.random() * group.length);
    return group[RanNumber];
  }
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  console.log(element(who) + element(action) + element(what) + element(when));
  document.querySelector("#excuse").innerHTML =
    element(who) + element(action) + element(what) + element(when);
}
