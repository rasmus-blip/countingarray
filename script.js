"use strict";
const array = [];
let countervalue = 1;
let displayArray = document.querySelector("h1");
document.querySelector("button").addEventListener("click", init);

function init() {
  array.unshift(countervalue);
  array.splice(9, 1);
  setTimeout(init, 1500);
  countervalue++;
  console.log(array);
  displayArray.textContent = array.join(" ");
}
