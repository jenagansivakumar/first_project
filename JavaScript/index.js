const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icon"]');

console.log(bookmarkIcons.length);

for (let i = 0; i < bookmarkIcons.length; i++) {
  const bookmarkIcon = bookmarkIcons[i];
  console.log(bookmarkIcon);
  bookmarkIcon.addEventListener("click", () => {
    if (bookmarkIcon.src.match("./assets/bookmark_transparent.png")) {
      bookmarkIcon.src = "./assets/bookmark_filled.png";
    } else {
      bookmarkIcon.src = "./assets/bookmark_transparent.png";
    }
  });
}

const answers = document.querySelectorAll('[data-js="show-answer"]');
console.log(answers.length);

for (let i = 0; i < answers.length; i++) {
  const answer = answers[i];

  const hiddenAnswer = document.getElementsByClassName("hidden_answer");

  console.log(answer);
  answer.addEventListener("click", (e) => {
    console.log(hiddenAnswer);
    hiddenAnswer[i].toggleAttribute("hidden");

    //   button.textContent = ;
    if (hiddenAnswer[i].hasAttribute("hidden")) {
      //   answer.textContent = "Show answer";
      // } else {
      //   answer.textContent = "Hidden answer";
    }
  });
}
// document.querySelectorAll("question__card").forEach((question__card) => {
//   let button = question__card.querySelector("question_button");
//   let answer = question__card.querySelector(".Answer");
//   button.addEventListener("click", () => {
//     // console.log("i was clicked: ", bookmarkButton);
//     answer.classList.toggle("hidden");
//   });
// });
