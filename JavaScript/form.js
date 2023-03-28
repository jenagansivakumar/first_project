const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tags-input"]');

console.log(tagInput);
const newCardContainer = document.querySelector(
  '[data-js="new-card-container"]'
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const questionFromForm = questionInput.value;
  const tagFromForm = tagInput.value;
  const answerFromForm = answerInput.value;

  const cardHtml = `<div class="question_container">
<section class="question__card">
  <h2 class="question__card__question2">
    <button id="question_bookmark">
      <img
        data-js="bookmark-icon"
        id="bookmark_toggle"
        src="assets/bookmark_filled.png"
        width="40"
        height="70"
        alt="Image 1"
      />
    </button>
    ${questionFromForm}
  </h2>

  <button data-js="show-answer">${answerFromForm}</button>
  <p class="hidden_answer" ${answerFromForm}></p>
  <div class="tag_container">
    <p id="tags">${tagFromForm}</p>

  </div>
</section>
</div>`;

  newCardContainer.innerHTML = cardHtml;
});

const textInput = document.querySelector('[data-js="text-input"]');
const counter = document.getElementById("counter");

answerInput.addEventListener("input", () => {
  counter.innerText = answerInput.value.length;
});
