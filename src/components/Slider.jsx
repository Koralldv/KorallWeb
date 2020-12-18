import React from 'react';

import Slider1 from '../components/Slider1';
import Slider2 from '../components/Slider2';

import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

function Slider({ items, sliderConf }) {
    return (
        <Swiper
            spaceBetween={sliderConf.spaceBetween}
            // slidesPerView={sliderConf.slidesPerView}
            loop={sliderConf.loop}
            speed={sliderConf.speed}
            breakpoints={{
                320: {
                    slidesPerView: sliderConf.breakpoints[0],
                },
                480: {
                    slidesPerView: sliderConf.breakpoints[1],
                },
                768: {
                    slidesPerView: sliderConf.breakpoints[2],
                },
                1025: {
                    slidesPerView: sliderConf.breakpoints[3],
                },
                1440: {
                    slidesPerView: sliderConf.breakpoints[4],
                },
            }}
            autoplay={{
                delay: sliderConf.delay,
                disableOnInteraction: sliderConf.disableOnInteraction,
            }}
            navigation={{
                nextEl: sliderConf.nextEl,
                prevEl: sliderConf.prevEl,
            }}
            scrollbar={{ draggable: false }}
            pagination={sliderConf.pagination}>
            {items.map(function (item, i) {
                return (
                    <SwiperSlide key={i}>
                        {sliderConf.sliderName === 'Slider1' ? (
                            <Slider1 item={item} />
                        ) : (
                            <Slider2 item={item} />
                        )}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default Slider;
