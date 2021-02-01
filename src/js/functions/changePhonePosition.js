import vars from '../_vars';

const changePhonePosition = () => {
  if(window.innerWidth <= 768) {
    const headerHeight = vars.header.clientHeight;
    const titleHeight = vars.contentTitle.clientHeight;
    vars.phone.style.top = headerHeight + titleHeight + 40 + 'px';
  } else {
    vars.phone.style.top = 'auto';
  }
}

export default changePhonePosition;