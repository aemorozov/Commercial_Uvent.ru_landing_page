document.querySelector('.block4-2-circle1-text').innerHTML = "СВАДЬБЫ   СВАДЬБЫ   СВАДЬБЫ   СВАДЬБЫ   СВАДЬБЫ".split('')
.map((e,i) => `<span style="--rot:${i*7.2}deg">${e}</span>`).join('');

document.querySelector('.block4-2-circle2-text').innerHTML = "ВЫПУСКНЫЕ  ВЫПУСКНЫЕ  ВЫПУСКНЫЕ  ВЫПУСКНЫЕ".split('')
.map((e,i) => `<span style="--rot:${i*8.2}deg">${e}</span>`).join('');

document.querySelector('.block4-2-circle3-text').innerHTML = "ДНИ  РОЖДЕНИЯ  ДНИ  РОЖДЕНИЯ  ДНИ  РОЖДЕНИЯ".split('')
.map((e,i) => `<span style="--rot:${i*8}deg">${e}</span>`).join('');