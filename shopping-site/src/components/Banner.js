import React, { useState, useEffect, useReducer } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Banner.scss';

SwiperCore.use([Navigation, Pagination]);

const Banner = () => {

    const slides = [];

    const bannerReducer = (state, action) => {
        switch (action.type) {
            case 'setTitle':
                return {
                    ...state,
                    title: action.title
                }
            case 'setSubtitle':
                return {
                    ...state,
                    subtitle: action.subtitle
                }
            case 'setImgUrl':
                return {
                    ...state,
                    imgUrl: action.imgUrl
                }
            case 'setRenderBanner':
                return {
                    ...state,
                    renderBanner: action.renderBanner
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(bannerReducer, { title: [], subtitle: [], imgUrl: [], renderBanner: false });

    useEffect(() => {
        async function fetchData() {
            try {
                const apiUrl = `https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details`;
                let response = await fetch(apiUrl);
                if (!response.ok) throw new Error('API request failed.');
                response = await response.json();
                let _title = [];
                let _subtitle = [];
                let _imgUrl = [];
                response.Details.forEach(e => _title.push(e.Title));
                response.Details.forEach(e => _subtitle.push(e.Subtitle));
                response.Details.forEach(e => _imgUrl.push(e.ImageUrl));
                dispatch({ type: 'setTitle', title: _title });
                dispatch({ type: 'setSubtitle', subtitle: _subtitle });
                dispatch({ type: 'setImgUrl', imgUrl: _imgUrl });
                dispatch({ type: 'setRenderBanner', renderBanner: true })
            }
            catch (e) {
                console.log(e);
                return
            }
        }
        fetchData();

    }, []);

    const storeSlides = () => {

        for (let i = 0; i < 3; i += 1) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    {state.renderBanner ? <div className='banner__img'
                        style={{ backgroundImage: `url(${state.imgUrl[i]})` }}>
                        <div className='center-content banner__img__content'>
                            <div className='banner__title'>{state.title[i]}</div>
                            <div className='banner__subtitle'>{state.subtitle[i]}</div>
                            <div>
                                <button className='btn btn__primary'>Contact us</button>
                            </div>
                        </div>
                    </div> : null}
                </SwiperSlide>
            )
        };
    }

    storeSlides();

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