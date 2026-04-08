// ==== COMING SOON DATA ====
const comingSoon = [
  {
    name: "AFA Thailand 2026",
    date: "2026-05-30",
    type: "Exhibition",
    image: "images/event-coming-soon/AFA.png",
    link: "https://animefestival.asia/afath26",
  },
  {
    name: "AFA Thailand 2026",
    date: "2026-05-30",
    type: "Exhibition",
    image: "images/event-coming-soon/AFA.png",
    link: "https://animefestival.asia/afath26",
  },
  {
    name: "AFA Thailand 2026",
    date: "2026-05-30",
    type: "Exhibition",
    image: "images/event-coming-soon/AFA.png",
    link: "https://animefestival.asia/afath26",
  },
];

// ==== CREATE COMING SOON CARDS ====
function displayComingSoon() {
  const container = document.querySelector("#upcoming-events");

  comingSoon.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("coming-card");
    card.innerHTML = `
      <div class="coming-info">
        <span class="event-type">${event.type}</span>
        <h4>${event.name}</h4>
        <p>📅 ${event.date}</p>
      </div>
      <img src="${event.image}" alt="${event.name}">
    `;
    card.addEventListener("click", () => window.open(event.link, "_blank"));
    container.appendChild(card);
  });
}

displayComingSoon();
