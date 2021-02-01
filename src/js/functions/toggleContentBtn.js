import vars from '../_vars';

const toggleContentBtn = () => {
  vars.contentBtn.classList.toggle('active');

  vars.contentBtn.classList.contains('active')
    ? vars.contentBtnText.textContent = 'стоп'
    : vars.contentBtnText.textContent = 'смотри';

  vars.contentBtn.disabled = true;
  setTimeout(() => {
    vars.contentBtn.disabled = false;
  }, 2000);
}

export default toggleContentBtn;