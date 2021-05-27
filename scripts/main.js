// Menu
const menuBtnWrapper = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');
const nav = document.querySelector('.header__nav');

let hideMenu = true;
menuBtnWrapper.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(hideMenu) {
    nav.classList.add('open');
    menuBtnWrapper.classList.add('open');
    menuBtn.classList.add('open');
    hideMenu = false;
  } else {
    nav.classList.remove('open');
    menuBtnWrapper.classList.remove('open');
    menuBtn.classList.remove('open');
    hideMenu = true;
  }
}

// Add href attribute to phone number for mobile
const phone = document.querySelector('.phone');  // top icon
const contactPhone = document.querySelector('.contact-phone');  // bottom icon
const isMobile = /iPhone|iPad|iPod|webOS|Windows Phone|Android/i.test(navigator.userAgent);

if (isMobile) {
  phone.setAttribute('href', 'tel:+353857751039');
  contactPhone.setAttribute('href', 'tel:+353857751039');
} else {
  phone.removeAttribute('href');
  contactPhone.setAttribute('href', '#address');
}