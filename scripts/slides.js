// ===== SLIDESHOW DATA =====
const slides = [
  {
    name: "Maruya #45 : The Carnival",
    date: "2026-03-15",
    location: "Union Mall",
    image: "../images/Maruya.jpg",
    link: "https://www.maruya.in.th/",
  },
  {
    name: "Muse Anime Festival 2026",
    date: "2026-01-01 - 2026-03-29",
    location: "MBK",
    image: "../images/Muse.webp",
    link: "https://www.mbk-center.co.th/event/muse-anime-festival-2026/",
  },
  {
    name: "PERSONA 5 Concert Asia Tour 2026",
    date: "2026-06-16",
    location: "Union Mall",
    image: "../images/Persona.png",
    link: "https://www.eventpop.me/e/137068/persona-5-big-band-concert?aff=evp&fbclid=IwY2xjawQm7lJleHRuA2FlbQIxMABicmlkETF6V0tqaTBQTWlBcWh0S21mc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHsE50F-4MdIxkvJGaBU8Tf2R17ahd7BA99fFb21kl8GJmFM1YzhDuYsjAYux_aem_wew21xoVTC4KzBJmRzeB5g",
  },
];

// ===== CREATE SLIDESHOW =====
let currentSlide = 0;

function createSlide() {
  // JS วิ่งเข้าไปหา #slideshow-container ใน HTML
  const container = document.querySelector("#slideshow-container");

  //DOM Manipulation
  slides.forEach((slide, index) => {
    //ไว้สร้างdivในhtml
    const slideElement = document.createElement("div");
    //เพิ่มคลาสชื่อslideในslideElement
    slideElement.classList.add("slide");
    //เพิ่มstyle background image
    slideElement.style.backgroundImage = `url(${slide.image})`;
    //คอยฟังว่ามี event เกิดขึ้นไหม เรียก function นี้เมื่อมีคนclick
    if (index === 0) slideElement.classList.add("active");
    //คือการบอกให้ slide แรกโชว์ทันทีตอนเปิดเว็บ โดยไม่ต้องรอ 3วิ
    slideElement.addEventListener("click", () => {
      window.open(slide.link, "_blank"); // window → ตัวแทนของ browser window
      // open() → เปิด URL ใหม่
    });
    container.appendChild(slideElement); //แปะบนหน้าเว็บ
    // container คือ div#slideshow-container ใน HTML
    // ที่ต้องเป็นลูกของ container เพราะ CSS ที่เราเขียนไว้
    // กำหนดให้ #slideshow-container เป็นกล่องที่ slides ทั้งหมดอยู่ข้างใน
    // ถ้าไม่ appendChild เข้าไป slide จะลอยอยู่ใน JS ไม่โผล่บนเว็บเลย
  });
}

createSlide();

// ===== AUTO SLIDE =====
function goToSlide(index) {
  const allSlides = document.querySelectorAll(".slide");
  allSlides.forEach((slide) => slide.classList.remove("active"));
  allSlides[index].classList.add("active");
}
/*1. หา slides ทั้งหมด
2. ลบ active ออกจากทุก slide  → ทุกตัวซ่อน
3. ใส่ active ให้ตัวที่ต้องการ → ตัวนั้นโชว์*/

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // มี 3 slides //% คือ Modulo แปลเศษที่เหลือ จากการหาร
  goToSlide(currentSlide);
} //// มันเอาตัวท้ายมาตั้งแล้วหารไม่ใช่เอาตัวหน้า
//0 + 1 = 1 % 3 = 1  ไปslide1
//1 + 1 = 2 % 3 = 2  ไปslide2
//2 + 1 = 3 % 3 = 0 วนกลับslide0

setInterval(nextSlide, 3000);
// function ที่บอกให้ JS เรียก function ซ้ำๆ ทุกกี่ milliseconds

// ==== ARROW BUTTONs =====
function changeSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  goToSlide(currentSlide);
}
//logic (0 + 1 + 3) % 3); //  1 เพราะ 4 หาร 3 ได้ 1 เหลือเศษ 1
// กฎง่ายๆ คือ ถ้าตัวตั้งน้อยกว่าตัวหาร คำตอบคือตัวตั้งเลย
document
  .querySelector("#back-btn")
  .addEventListener("click", () => changeSlide(-1));
document
  .querySelector("#next-btn")
  .addEventListener("click", () => changeSlide(1));
