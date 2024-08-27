"use client";
import { Navigation, Pagination,EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

function Home() {
  const pagination_item = [
    { title: "Boundless",
      text: "Commercial-passenger Uses"
    },
    { title: "Boundless",
      text: "Exploration"
    },
    { title: "Boundless",
      text: "Intelligence"
    }
  ]
  return (
    <Swiper
    modules={[Navigation, Pagination, EffectFade]}
    spaceBetween={50}
    slidesPerView={1}
    effect={'fade'}
 
    pagination={{
      clickable: true,
      renderBullet: function (index, className) {
        const texts = ['One', 'Two', 'Three']; // Custom text for each slide
        return `<div class="${className}" data-index="${index}"><h2 >${pagination_item[index].title}</h2>
               <p>${pagination_item[index].text}</p>
        </div>`;
      },
    }}
    onSwiper={(swiper) => {
     
      
      const bullets = document.querySelectorAll('.swiper-pagination .swiper-pagination-bullet');
      bullets.forEach(bullet => {
        bullet.addEventListener('mouseover', function () {
          const index = this.getAttribute('data-index');
          swiper.slideTo(parseInt(index));
        });
      });
    }}
  >
      <SwiperSlide><img src="https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width:"100%", height: "100vh", objectFit:"cover"}} /></SwiperSlide>
      <SwiperSlide><img src="https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width:"100%", height: "100vh", objectFit:"cover"}} /></SwiperSlide>
      <SwiperSlide><img src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{width:"100%", height: "100vh", objectFit:"cover"}} /></SwiperSlide>
    </Swiper>
    
  );
}

export default Home
