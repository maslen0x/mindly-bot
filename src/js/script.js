import vars from './_vars';
import toggleContentBtn from './functions/toggleContentBtn';
import changePhonePosition from './functions/changePhonePosition';

document.addEventListener('DOMContentLoaded', () => {
  changePhonePosition();
})

window.addEventListener('resize', () => {
  changePhonePosition();
})

vars.contentBtn.addEventListener('click', () => {
  toggleContentBtn();
  vars.toggleElems.forEach(el => el.classList.toggle('reverse'));
})