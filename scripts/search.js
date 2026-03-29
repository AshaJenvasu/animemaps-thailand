const searchBtn = document.querySelector("#search-btn");
const searchPopup = document.querySelector("#search-popup");
const closeSearch = document.querySelector("#close-search");

searchBtn.addEventListener("click", () => {
  searchPopup.classList.add("active");
});

closeSearch.addEventListener("click", () => {
  searchPopup.classList.remove("active");
});
