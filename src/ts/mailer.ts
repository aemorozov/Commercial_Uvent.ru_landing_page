// const requireFromUrl = require('require-from-url/sync');
const emailjs = require('emailjs-com');
const btn: HTMLInputElement | null = document.querySelector('.button');

document.getElementById('form')?.addEventListener('submit', function(event) {
   event.preventDefault();

    console.log('click')

   if (!btn) return

   btn.value = 'Отправляется...';

   const serviceID = 'default_service';
   const templateID = 'template_j2n3uuh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Отправить';
      alert('Sent!');
    }, (err: Error) => {
      btn.value = 'Отправить';
      alert(JSON.stringify(err));
    });
});