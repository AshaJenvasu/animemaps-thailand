const events = [
  {
    name: 'Maruya #45 : The Carnival',
    date: '2026-03-15',
    location:'Union Mall',
    type:'Cosplay'
  },
  {
    name: 'Muse Anime Festival 2026',
    date: '2026-01-01 - 2026-03-29',
    location:'MBK',
    type:'Exhibition'
  },
  {
    name: 'PERSONA 5 Special Big Band Concert Asia Tour 2026',
    date: '2026-06-16',
    location:'Union Mall',
    type: 'Concert'
  }
] //group อีเว้นกันเป็นกลุ่มในobjects events

function displayEvents() {
  const eventContainer = document.getElementById('event-container'); //ทำให้แสดงผลบนhtml id ที่เราตั้งชื่อไว้ 
  //แต่ถ้าเป็นclassเราจะใช้document.querySelector('.event-container') เหมือนที่เคยเรียนมา

  events.forEach((event) => { //ถ้าตรงนี้ใส่eventsจะเป็นarrayทั้งก้อนมามี3objects 
    //ต้องตั้งparameterใหม่ที่foreachจะใส่ข้อมูลไว้ข้างในจะได้ออกมาทีละอีเว้น
    const eventInfo = document.createElement('div')
    eventInfo.innerHTML = `
    <h2>${event.name}</h2>
    <p>${event.date}</p>
    <p>${event.location}</p>
    <p>${event.type}</p>
    `
    eventContainer.appendChild(eventInfo) //put eventInfo to be a child of evenContainer
  })

}

displayEvents();