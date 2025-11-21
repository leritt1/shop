import './style.css'
import 'flowbite';

// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 let swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    