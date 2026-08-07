import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import './style.scss';


// слайдер
let swiper = new Swiper('.swiper-container', {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 3000, // Пауза между прокруткой в мс (3 секунды)
        disableOnInteraction: false, // Не отключать автоплей при кликах/свайпах
        pauseOnMouseEnter: true, // Приостанавливать при наведении мыши
    },
    slideToClickedSlide: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
});


// range slider для цены
const rangeSlider = document.getElementById('range-slider');
const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');
const inputs = [input0, input1];

noUiSlider.create(rangeSlider, {
    start: [0, 50000],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 50000
    }
});

rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
}

inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
    })
})


