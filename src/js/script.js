import vars from './_vars';
import toggleContentBtn from './functions/toggleContentBtn';
import parallax from './functions/parallax';

window.addEventListener('mousemove', e => {
  parallax(e);
})

vars.contentBtn.addEventListener('click', () => {
  toggleContentBtn();
  vars.toggleElems.forEach(el => {
    el.length
      ? el.forEach(innerEl => innerEl.classList.toggle('reverse'))
      : el.classList.toggle('reverse');
  })
})

vars.mobilePhone.addEventListener('click', () => {
  window.open('https://t.me/Jayne_n');
})

vars.centerWave.addEventListener('click', () => {
  window.open('https://t.me/Jayne_n');
})