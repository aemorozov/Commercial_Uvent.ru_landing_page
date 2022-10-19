document.querySelector('.block4-2-circle1-text').innerHTML = "С В А Д Ь Б Ы    С В А Д Ь Б Ы    С В А Д Ь Б Ы    С В А Д Ь Б Ы    С В А Д Ь Б Ы".split('')
.map((e,i) => `<span class="circle-text" style="--rot:${i*4.2}deg">${e}</span>`).join('');

document.querySelector('.block4-2-circle2-text').innerHTML = "В Ы П У С К Н Ы Е   В Ы П У С К Н Ы Е   В Ы П У С К Н Ы Е   В Ы П У С К Н Ы Е".split('')
.map((e,i) => `<span class="circle-text" style="--rot:${i*4.5}deg">${e}</span>`).join('');

document.querySelector('.block4-2-circle3-text').innerHTML = "ДНИ  РОЖДЕНИЯ  ДНИ  РОЖДЕНИЯ  ДНИ  РОЖДЕНИЯ".split('')
.map((e,i) => `<span class="circle-text" style="--rot:${i*8}deg">${e}</span>`).join('');