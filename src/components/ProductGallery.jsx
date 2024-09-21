
import { dbImages } from '../data/db-images.js';
import { v4 as uuidv4 } from 'uuid';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const ProductGallery = () => {  

  return (
    <div>

      <div className="swiper">

        <div className="swiper-wrapper">

          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
                      
            { dbImages.map( (img) => (
              <SwiperSlide key={ uuidv4() } >

                <img className="slide-img"
                    src={img.src} 
                    alt={img.name} />

              </SwiperSlide>
            )) }

          </Swiper>

        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

      </div>

    </div>
  )
}