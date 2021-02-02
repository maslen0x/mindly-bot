import vars from '../_vars';

const parallax = e => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const offsetX = 0.5 - e.pageX / width;
  const offsetY = 0.5 - e.pageY / height;

  vars.parallaxElems.forEach(el => {
    const offset = parseInt(el.dataset.offset);
    const translate = `translate(${Math.round(offsetX * offset)}px, ${Math.round(offsetY * offset)}px)`;
    el.style.transform = translate;
  })
}

export default parallax;