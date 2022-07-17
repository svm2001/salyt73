import './modules/jquery.slim.js'
import 'jquery'
import 'slick-slider'
import './modules/slick.js'
import './modules/burger.js'
import './modules/canvas.js'
import './modules/popup.js'
import IMask from 'imask';
import './modules/validation.js'




const swiper = new Swiper()
import Swiper, { Navigation, Pagination } from 'swiper'


$(document).ready(function(){
    $('.slider--introduce').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 0,
        arrows: false,
        centerMode: true,
        infinite: true,
        swipe: false,
        allowTouchMove: false,
    });
});

var element = document.getElementById('inputPhone');
var maskOptions = {
    mask: '+{7} (000) 000-00-00'
};
var mask = IMask(element, maskOptions);


