console.log(134);

// const bookmarkButton = document.getElementById("bookmarked");

const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icon"]');

console.log(bookmarkIcons.length);

for (let i = 0; i < bookmarkIcons.length; i++) {
  const bookmarkIcon = bookmarkIcons[i];
  console.log(bookmarkIcon);
  bookmarkIcon.addEventListener("click", () => {
    // const bookmarked = document.querySelector('[data-js="bookmarked_1"]');
    if (bookmarkIcon.src.includes("transparent")) {
      bookmarkIcon.src = "./assets/bookmark_filled.png";
    } else {
      bookmarkIcon.src = "./assets/bookmark_transparent.png";
    }
  });
}

// console.log(bookmarkButton);
