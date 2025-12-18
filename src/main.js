import './style.css'
import 'flowbite';

// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 let swiper1 = new Swiper(".mySwiper1", {
    modules: [Navigation, Pagination],
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
        var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

     const openBtn = document.querySelector('.filter-open-btn');
    const closeBtn = document.querySelector('#filterClose');
    const panel   = document.querySelector('#filterPanel');
    const overlay = document.querySelector('#filterOverlay');

    openBtn.onclick = () => {
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = "hidden"; 
    }

    const closePanel = () => {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = "";
    }

    closeBtn.onclick = closePanel;
    overlay.onclick = closePanel;
    const logo = document.querySelector('.logo');
    const menu = document.querySelector('.header-menu');

    logo.addEventListener('click', () => {
    menu.classList.toggle('active');
    });
    
    