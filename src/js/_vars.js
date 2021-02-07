const vars = {
  contentBtn: document.querySelector('.content__btn'),
  contentBtnText: document.querySelector('.content__btn-text'),
  toggleElems: [
    document.querySelector('.wrapper'),
    document.querySelector('.header__logo'),
    document.querySelector('.content__title'),
    document.querySelector('.content__subtitle'),
    document.querySelector('.phone'),
    document.querySelector('.phone--mobile'),
    document.querySelector('.wave--top'),
    document.querySelector('.wave--center'),
    document.querySelectorAll('.wave--bottom')
  ],
  header: document.querySelector('.header'),
  contentTitle: document.querySelector('.content__title'),
  phone: document.querySelector('.phone'),
  mobilePhone: document.querySelector('.phone--mobile'),
  centerWave: document.querySelector('.wave--center'),
  parallaxElems: document.querySelectorAll('[data-parallax]'),
}

export default vars;