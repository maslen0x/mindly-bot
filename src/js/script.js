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

window.addEventListener('mousemove', e => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const offsetX = 0.5 - e.pageX / width;
  const offsetY = 0.5 - e.pageY / height;

  vars.parallaxElems.forEach(el => {
    const offset = parseInt(el.dataset.offset);
    const translate = `translate(${Math.round(offsetX * offset)}px, ${Math.round(offsetY * offset)}px)`;
    el.style.transform = translate;
  })
})