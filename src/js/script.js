import vars from './_vars';
import toggleContentBtn from './functions/toggleContentBtn';
import changePhonePosition from './functions/changePhonePosition';
import parallax from './functions/parallax';

document.addEventListener('DOMContentLoaded', () => {
  // changePhonePosition();
})

window.addEventListener('resize', () => {
  // changePhonePosition();
})

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
