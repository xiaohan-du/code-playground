import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Banner.scss';

SwiperCore.use([Navigation, Pagination]);

const Banner = () => {
    const slides = [];

    for (let i = 0; i < 5; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={`https://picsum.photos/id/${i + 1}/1600/500`} alt={`slide ${i}`} />
            </SwiperSlide>
        )
    };

    

    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={(swiper) => console.log('slide ' + swiper.activeIndex)}
                onSwiper={(swiper) => console.log('slide ' + swiper.activeIndex)}
                onReachEnd={() => console.log('End reached')}
                navigation
                pagination
            >
                {slides}
            </Swiper>
            <div className='main-page banner'>
                <h1 className='banner__title'>
                    Lorem ipsum dolor
                </h1>
                <h3 className='banner__subtitle'>
                    Quem vide tincidunt pri ei, id mea omnium denique
                </h3>
                <div>
                    <button className='btn btn__primary'>Contact us</button>
                </div>
            </div>
        </>
    )
}

export default Banner;