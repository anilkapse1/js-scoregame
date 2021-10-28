"use strict";

let boxGroup = document.querySelectorAll(".box span");
let disScore = document.querySelector("h1");
let boxLength = boxGroup.length;
let count = 0;

boxGroup.forEach((val) => {
  console.log(val);
  val.addEventListener("click", () => {
    if (val.classList.contains("active")) {
      count++;
      disScore.innerText = `score is :${count}`;
    }
  });
});

let interval = setInterval(() => {
  let randomNum = Math.floor(Math.random() * boxLength);

  boxGroup.forEach((val, idx) => {
    val.classList.remove("active");
  });

  boxGroup[randomNum].classList.add("active");
}, 700);
