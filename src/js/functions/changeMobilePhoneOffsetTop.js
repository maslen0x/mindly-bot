import vars from '../_vars';

const changeMobilePhoneOffsetTop = () => {
  const headerHeight = vars.header.clientHeight;
  const contentTitleHeigth = vars.contentTitle.clientHeight;
  vars.mobilePhone.style.top = headerHeight + contentTitleHeigth + 40 + 'px';
}

export default changeMobilePhoneOffsetTop;