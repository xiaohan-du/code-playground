import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Banner.scss';

SwiperCore.use([Navigation, Pagination]);

const Banner = () => {
    const slides = [];

    const [title, setTitle] = useState([]);
    const [subtitle, setSubtitle] = useState([]);
    const [imgUrl, setImgUrl] = useState([]);
    const [renderBanner, setRenderBanner] = useState(false);

    for (let i = 0; i < 3; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                {renderBanner ? <div className='banner__img'
                    style={{ backgroundImage: `url(${imgUrl[i]})` }}>
                    <div className='center-content banner__img__content'>
                        <div className='banner__title'>{title[i]}</div>
                        <div className='banner__subtitle'>{subtitle[i]}</div>
                        <div>
                            <button className='btn btn__primary'>Contact us</button>
                        </div>
                    </div>
                </div> : null}
            </SwiperSlide>
        )
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const apiUrl = `https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details`;
                let response = await fetch(apiUrl);
                if (!response.ok) throw new Error('Test API request failed.');
                response = await response.json();
                let _title = [];
                let _subtitle = [];
                let _imgUrl = [];
                response.Details.forEach(e => _title.push(e.Title));
                response.Details.forEach(e => _subtitle.push(e.Subtitle));
                response.Details.forEach(e => _imgUrl.push(e.ImageUrl));
                setTitle(_title);
                setSubtitle(_subtitle);
                setImgUrl(_imgUrl);
                setRenderBanner(true);
            }
            catch (e) {
                console.log(e);
                return
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => console.log('slide ' + swiper.activeIndex)}
                onSwiper={(swiper) => console.log('slide ' + swiper.activeIndex)}
                onReachEnd={() => console.log('End reached')}
                navigation
                pagination
            >
                {slides}
            </Swiper>
        </>
    )
}

export default Banner;