// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });

const burgerMenu = document.querySelector('.burger-menu');
const menuLink = document.querySelectorAll('.burger-menu__li');
const burgerLogo = document.querySelector('.burger');
const contactUs = document.querySelector('.burger-menu__contact-us')
const closeBurgerBtn = document.querySelector('.burger-menu__close-btn');
const languageSelect = document.querySelectorAll('.options__language');
contactUs.addEventListener('click', toggleBurger);
burgerLogo.addEventListener('click', toggleBurger);
menuLink.forEach(link => {
  link.addEventListener('click', toggleBurger);
});
languageSelect.forEach(button => {
  button.addEventListener('click', () => {
    alert('here is should be custom input select component')
  })
})
closeBurgerBtn.addEventListener('click', toggleBurger);
function toggleBurger() {
  burgerMenu.classList.toggle('--active');
  document.body.classList.toggle('--scroll-hiden');
};