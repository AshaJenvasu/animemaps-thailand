// ===== EVENT DATA =====
const events = [
  {
    name: "Maruya #45 : The Carnival",
    date: "2026-03-15",
    location: "Union Mall",
    type: "Cosplay",
    image: "images/event-recommendation/Maruya.png",
    link: "https://www.maruya.in.th/",
    description:
      "Maruya #45 งานมหกรรมรวมพลชาวคอสเพลย์และคนรักการ์ตูนที่ใหญ่ที่สุดงานหนึ่งในไทย! เตรียมพบกับบูธสินค้าทำมือ (Doujinshi), กิจกรรมบนเวทีสุดสนุก และพื้นที่สำหรับถ่ายรูปคอสเพลย์แบบจัดเต็ม ณ ศูนย์การค้า Union Mall!",
  },
  {
    name: "Muse Anime Festival 2026",
    date: "2026-01-10 - 2026-03-29",
    location: "MBK Center",
    type: "Exhibition",
    image: "images/event-recommendation/Muse.png",
    link: "https://www.mbk-center.co.th/event/muse-anime-festival-2026/",
    description:
      "Muse Anime Festival 2026 สวรรค์ของคนรักอนิเมะใจกลางเมือง! พบกับ 18 โซนถ่ายภาพสุดอลังการจากเรื่องดังอย่าง Dandadan, เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว และ Frieren แถมยังมีสินค้าลิขสิทธิ์กว่า 1,000 รายการ และคาเฟ่ธีมสุดคิ้วท์ให้ได้นั่งพักผ่อนกันด้วย ที่สำคัญ... เข้าชมฟรี นะจ๊ะ! ที่ MBK Center ชั้น 4 โซน A",
  },
  {
    name: "PERSONA 5 Concert Asia Tour 2026",
    date: "2026-06-16",
    location: "Union Mall",
    type: "Concert",
    image: "images/event-recommendation/Persona.png",
    link: "https://www.eventpop.me/e/137068/persona-5-big-band-concert",
    description:
      "ดำดิ่งสู่โลกของ Persona 5 กับดนตรีสไตล์ Big Band สุดแจ๊ส! นำทีมโดยศิลปินเสียงทรงพลัง Lyn ผู้ร้องเพลงประกอบเกม และวงบิ๊กแบนด์คุณภาพเยี่ยมภายใต้การควบคุมของ Charlie Rosen (เจ้าของรางวัล Grammy) งานนี้จัดเต็มทั้งแนว Jazz, Funk และ Soul ที่จะทำให้หัวใจเต้นแรงเหมือนอยู่ใน Metaverse เลยละ!",
  },
];

// ==== CREATE EVENT CARDS ====
function displayEvents() {
  const container = document.querySelector("#event-container"); //สร้างตัวแปรเก็บ id event-container

  events.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("event-card");
    card.innerHTML = `
    <img src="${event.image}">
    <div class = "event-info">
    <span class="event-type">${event.type}</span>
    <h3>${event.name}</h3>
    <p>📅 ${event.date}</p>
    <p>📍${event.location}</p>
    <p class="event-description"> ${event.description}</p>
    </div>
    `;
    card.addEventListener("click", () => window.open(event.link, "_blank"));
    container.appendChild(card);
  });
} //เราสร้างloop that create new div and add new class into it that inside that div we insert all information from events then use eventlistenr to open to new window to the link we insert why  we use   container.appendChild(card);

//เพราะ `card` ที่เราสร้างด้วย `createElement` มันลอยอยู่ใน JS ยังไม่ได้อยู่บนหน้าเว็บเลย appendChild   → เอา card ไปแปะใน container บนหน้าเว็บ

displayEvents();
