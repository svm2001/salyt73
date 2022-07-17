let burgerMenu = document.querySelector('.header__menu');
let burgerBtn = document.querySelector('.burger__button');
let body = document.querySelector("body");

if (burgerBtn) {
    burgerBtn.addEventListener('click', function (){
        burgerMenu.classList.toggle('open');
        burgerBtn.classList.toggle('open');
        body.classList.toggle('open');
    })
}





