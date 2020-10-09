import React, { useEffect, useReducer, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import Spinner from './Spinner';
import { Link } from "react-router-dom";
import 'swiper/swiper-bundle.css';
import './Banner.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const personalDetails = [
    {
        id: 1,
        title: ' React JS development',
        subtitle: 'I specialise in web development using React JS',
        imgUrl: require('../images/trooper.jpg')
    },
    {
        id: 2,
        title: 'Responsive design',
        subtitle: 'I understand the art of responsive design',
        imgUrl: require('../images/responsive.jpg')
    },
    {
        id: 3,
        title: 'Software development',
        subtitle: 'I\'m an experienced software developer',
        imgUrl: require('../images/code.jpg')
    },
    {
        id: 4,
        title: 'Scientific computing',
        subtitle: 'I have a PhD degree in computational mechanics',
        imgUrl: require('../images/dashboard.jpg')
    }
]

const Banner = () => {

    const slides = [];

    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { title: [], subtitle: [], imgUrl: [], renderBanner: false }
    );

    const setTitles = useCallback(() => {
        let _title = [];
        let _subtitle = [];
        let _imgUrl = [];
        personalDetails.forEach(e => _title.push(e.title))
        personalDetails.forEach(e => _subtitle.push(e.subtitle));
        personalDetails.forEach(e => _imgUrl.push(e.imgUrl));
        setState({ title: _title });
        setState({ subtitle: _subtitle });
        setState({ imgUrl: _imgUrl });
    }, []);

    useEffect(() => {
        setTitles();
        setState({ renderBanner: true });
    }, [setTitles]);

    const storeSlides = () => {
        if (state.renderBanner === true) {
            for (let i = 0; i < personalDetails.length; i += 1) {
                slides.push(
                    <SwiperSlide key={`slide-${i}`}>
                        <div className='banner__img'
                            style={{ backgroundImage: `url(${state.imgUrl[i]})` }}>
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