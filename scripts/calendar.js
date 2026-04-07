// ===== CALENDAR EVENTS DATA =====
const calendarEvents = [
  {
    name: "Maruya #45 : The Carnival",
    startDate: "2026-03-15",
    endDate: "2026-03-15",
    location: "Union Mall",
    type: "cosplay",
    image: "images/nav/Maruya.jpg",
    link: "https://www.maruya.in.th/",
    description: "งานคอสเพลย์ที่ใหญ่ที่สุดในไทย รวมคอสเพลย์เยอร์กว่า 1,000 คน",
  },
  {
    name: "Muse Anime Festival 2026",
    startDate: "2026-01-10",
    endDate: "2026-03-29",
    location: "MBK Center",
    type: "exhibition",
    image: "images/nav/Muse.webp",
    link: "https://www.mbk-center.co.th/event/muse-anime-festival-2026/",
    description: "นิทรรศการอนิเมะสุดยิ่งใหญ่ รวมผลงานจากหลากหลายซีรีส์ดัง",
  },
  {
    name: "PERSONA 5 Concert Asia Tour 2026",
    startDate: "2026-06-16",
    endDate: "2026-06-16",
    location: "Union Mall",
    type: "concert",
    image: "images/nav/Persona.png",
    link: "https://www.eventpop.me/e/137068/persona-5-big-band-concert",
    description: "คอนเสิร์ต Big Band สุดอลังการจากเกม Persona 5 ทัวร์เอเชีย",
  },
  {
    name: "AFA Thailand 2026",
    startDate: "2026-05-30",
    endDate: "2026-05-31",
    location: "QSNCC",
    type: "exhibition",
    image: "images/event-coming-soon/AFA.png",
    link: "https://animefestival.asia/afath26",
    description:
      "งาน Anime Festival Asia ที่ยิ่งใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้",
  },
];
// ===== DISPLAY EVENTS =====
function displayCalendarEvents(events) {
  const container = document.querySelector("#calendar-container");
  container.innerHTML = "";

  events.forEach((event) => {
    const card = document.createElement("div");
    card.className =
      "flex gap-4 p-4 mb-4 border-b border-gray-700 cursor-pointer hover:bg-gray-800 transition rounded-lg";
    card.innerHTML = `
     <img src="${event.image}" class="w-40 h-28 object-cover rounded-lg flex-shrink-0" alt="${event.name}">
      <div class="calendar-info">
        <span class="bg-red-500 text-white text-xs px-2 py-1 rounded w-fit">${event.type}</span>
        <h3 class="text-brown font-bold text-lg">${event.name}</h3>
        <p>📅 ${
          event.startDate === event.endDate
            ? event.startDate
            : `${event.startDate} - ${event.endDate}`
        }</p>
        <p>📍 ${event.location}</p>
        <p>${event.description}</p>
      </div>
    `;

    card.addEventListener("click", () => window.open(event.link, "_blank"));
    container.appendChild(card);
  });
}

displayCalendarEvents(calendarEvents);

// ===== FILTER FUNCTION =====
function filterEvents() {
  const type = document.querySelector("#filter-type").value;
  const month = document.querySelector("#filter-month").value;

  let filtered = calendarEvents;

  if (type != "all") {
    filtered = filtered.filter((event) => event.type === type);
  }

  if (month !== "all") {
    filtered = filtered.filter((event) => {
      const startMonth = new Date(event.startDate).getMonth() + 1; //ดึงเดือนออกมา (+1 เพราะ JS นับจาก 0)
      const endMonth = new Date(event.endDate).getMonth() + 1;
      const selectedMonth = parseInt(month);
      return selectedMonth >= startMonth && selectedMonth <= endMonth;
    });
  }
  displayCalendarEvents(filtered);
}

document.querySelector("#filter-type").addEventListener("change", filterEvents);
document
  .querySelector("#filter-month")
  .addEventListener("change", filterEvents);
