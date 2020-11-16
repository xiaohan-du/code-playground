import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import Spinner from './Spinner';
import { Link } from "react-router-dom";
import 'swiper/swiper-bundle.css';
import './Banner.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = ({ props }) => {

    const slides = [];

    const initialState = {
        title: [],
        subtitle: [],
        imgUrl: [],
        renderBanner: false
    };

    const [state, setState] = useState(initialState);

    const setTitles = () => {
        let _title = [];
        let _subtitle = [];
        let _imgUrl = [];
        props.forEach(e => _title.push(e.title))
        props.forEach(e => _subtitle.push(e.subtitle));
        props.forEach(e => _imgUrl.push(e.imgUrl));
        setState({ 
            title: _title,
            subtitle: _subtitle,
            imgUrl: _imgUrl, 
            renderBanner: true
        });
    }

    const storeSlides = () => {
        if (state.renderBanner === true) {
            for (let i = 0; i < props.length; i += 1) {
                slides.push(
                    <SwiperSlide key={`slide-${i}`}>
                        <div className='banner__img'
                            style={{ backgroundImage: `url(${state.imgUrl[i].default})` }}>
                            <div className='center-content banner__content'>
                                <div className='banner__title'>{state.title[i]}</div>
                                <div className='banner__subtitle'>{state.subtitle[i]}</div>
                                <Link to="/contact-me">
                                    <button className='btn btn__primary'>
                                        Contact me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            };
        }

    }

    useEffect(() => {
        setTitles();
    }, []);

    storeSlides();

    return (
        <>
            <div className='banner'>
                {state.renderBanner ?
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        navigation
                        pagination
                        autoplay={true}>
                        {slides}
                    </Swiper>
                    :
                    <div className='spinner__wrapper'>
                        <Spinner />
                    </div>
                }
            </div>
        </>
    )
}

export default Banner;