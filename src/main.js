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
    
  
    