// ===== SEARCH BUTTON =====
const searchBtn = document.querySelector("#search-btn");
const searchPopup = document.querySelector("#search-popup");
const closeSearch = document.querySelector("#close-search");

searchBtn.addEventListener("click", () => {
  searchPopup.classList.add("active");
});

closeSearch.addEventListener("click", () => {
  searchPopup.classList.remove("active");
});

// ==== SET UP ELEMENTS =====
const searchInput = document.querySelector("#search-popup input");
const searchResults = document.createElement("div");
searchResults.id = "search-results";
document.querySelector("#search-popup").appendChild(searchResults);

// ==== SEARCH LISTENER =====
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (keyword === "") return;

  // ==== FILTER =====

  const results = events.filter((event) =>
    event.name.toLowerCase().includes(keyword),
  );

  // ==== SHOW SEARCH RESULTS =====
  results.forEach((event) => {
    const item = document.createElement("div");
    item.classList.add("search-item");
    item.innerHTML = `
    <img src="${event.image}" alt="${event.name}">
      <span>${event.name}</span>
    `;

    item.addEventListener("click", () => window.open(event.link, "_blank"));
    searchResults.appendChild(item);
  });
  /* user พิมพ์ "Mar"
→ input event ทำงาน
→ ล้างผลเก่า
→ filter หา events ที่ชื่อมี "mar" อยู่
→ forEach สร้าง card แสดงผลทีละอัน
→ user เห็นผลลัพธ์ทันทีแบบ real-time*/
});
// ==== REMOVE SEARCH RESULTS =====
searchPopup.addEventListener("click", (event) => {
  if (event.target === searchPopup) {
    searchPopup.classList.remove("active");
  }
});

// ===== SEARCH MOBILE =====
const searchInputMobile = document.querySelector("#search-popup-mobile input");
const searchResultsMobile = document.createElement("div");
searchResultsMobile.id = "search-results-mobile";
document.querySelector("#search-popup-mobile").appendChild(searchResultsMobile);

searchInputMobile.addEventListener("input", () => {
  const keyword = searchInputMobile.value.toLowerCase();
  searchResultsMobile.innerHTML = "";

  if (keyword === "") return;

  const results = events.filter((event) =>
    event.name.toLowerCase().includes(keyword),
  );

  results.forEach((event) => {
    const item = document.createElement("div");
    item.classList.add("search-item");
    item.innerHTML = `
      <img src="${event.image}" alt="${event.name}">
     
    `;
    item.addEventListener("click", () => window.open(event.link, "_blank"));
    searchResultsMobile.appendChild(item);
  });
});
