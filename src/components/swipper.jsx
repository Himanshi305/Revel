// SwiperComponent.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Responsive background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/moon.mp4"
        autoPlay
        loop
        muted
      />
      {/* Swiper content above video */}
      <div className="relative z-10 w-screen max-w-3xl mx-auto p-5 md:p-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="./P-1.png" className="rounded-4xl mx-auto md:w-screen max-h-[400px] object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./p-2.png" className="rounded-4xl mx-auto w-full max-h-[400px] object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./p-3.png" className="rounded-4xl mx-auto w-full max-h-[400px] object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./p-4.png" className="rounded-4xl mx-auto w-full max-h-[400px] object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./p-5.png" className="rounded-4xl mx-auto w-full max-h-[400px] object-contain" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
