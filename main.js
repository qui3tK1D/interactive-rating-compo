import "./style.scss";

"use strict";
const userMainContainer = document.querySelector(".user-feedback-container");
const numberList = document.querySelector(".number-lists");
const list = document.querySelectorAll(".list");
const feedbackText = document.querySelector(".feedbackRateText");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

let selectedRatingNum;
userMainContainer.addEventListener("click", function (e) {
  e.preventDefault();
  list.forEach((cur) => cur.classList.remove("selectedRateCircle"));
  console.log(e.target);
  const clicked = e.target;

  if (clicked.classList.contains("list")) {
    clicked.classList.add("selectedRateCircle");
    selectedRatingNum = clicked.innerText;
    console.log(selectedRatingNum);
  }
  if (clicked.classList.contains("submit-btn")) {
    feedbackText.textContent = `You selected ${
      selectedRatingNum || 0
    } out of 5`;
    card1.style.display = "none";
    card2.classList.remove("d-none");
    card2.classList.add("show");
  }
});
