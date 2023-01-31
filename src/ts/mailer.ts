const emailjs = require('@emailjs/browser');
const btn = document.querySelector<HTMLInputElement>(".button");
const contactBlock: HTMLElement | null = document.querySelector('.feedback-flex')
const checkCircle: HTMLElement | null = document.querySelector('.check-circle')
const groupCircle: HTMLElement | null = document.querySelector('.group-circle')
const thanks: HTMLElement | null = document.querySelector('.thanks')
const thanksText: HTMLElement | null = document.querySelector('.thanks-text')
const thanksTextBold: HTMLElement | null = document.querySelector('.thanks-text-bold')

emailjs.init("D32-TRfUefWjSF0BO");

document.getElementById('form')?.addEventListener('submit', function(event) {
   event.preventDefault();

   if(!btn) return

   btn.value = 'Отправляется...';

   const serviceID = 'service_tpk7b4m';
   const templateID = 'template_j2n3uuh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      contactBlock?.classList.add('animation-go-up')
      setTimeout(() => {
        contactBlock?.classList.add('display-none')
        checkCircle?.classList.remove('display-none')
        groupCircle?.classList.remove('display-none')
        thanks?.classList.remove('display-none')
        thanksText?.classList.remove('display-none')
        thanksTextBold?.classList.remove('display-none')
      }, 300)
      setTimeout(() => {
        checkCircle?.classList.add('thanks-go-up')
        groupCircle?.classList.add('thanks-go-up')
        thanks?.classList.add('thanks-go-up')
        thanksText?.classList.add('thanks-go-up')
        thanksTextBold?.classList.add('thanks-go-up')
      }, 400)
    }, (err: Error) => {
      btn.value = 'Отправить';
      alert('Произошла какая-то ошибка! Пожалуйста, напишите нам на почту uvent2020@mail.ru или позвоните +7 916 115 15 30' + err);
    });
});