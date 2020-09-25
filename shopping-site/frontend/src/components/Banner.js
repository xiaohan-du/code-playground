import React, { useEffect, useReducer, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import Spinner from './Spinner';
import { Link } from "react-router-dom";
import 'swiper/swiper-bundle.css';
import './Banner.scss';
import { shuffleArray } from '../functions/shuffleArray';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const personalDetails = [
    {
        id: 1,
        title: 'Front end development with React JS',
        subtitle: 'I focus on using React framework'
    },
    {
        id: 2,
        title: 'Responsive design',
        subtitle: 'This website is responsive, shrink the page to see it'
    },
    {
        id: 3,
        title: 'Software development',
        subtitle: 'Version control with Git, agile with Scrum and Kanban'
    },
    {
        id: 4,
        title: 'Scientific computing',
        subtitle: 'I hold a PhD degree in computational mechanics'
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
        personalDetails.forEach(e => _title.push(e.title))
        personalDetails.forEach(e => _subtitle.push(e.subtitle));
        setState({ title: _title });
        setState({ subtitle: _subtitle });
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const imgApiUrl = 'http://localhost:4000/image';
                let response = await fetch(imgApiUrl);
                if (!response.ok) throw new Error('API request failed.');
                response = await response.json();
                let _imgUrl = [];
                response.results.forEach(e => _imgUrl.push(e.urls.raw));
                let _imgUrlShuffle = shuffleArray(_imgUrl);
                setState({ imgUrl: _imgUrlShuffle });
                setState({ renderBanner: true });
            }
            catch (e) {
                console.log(e);
                return
            }
        }
        fetchData();
        
        setTitles();
    }, [setTitles]);

    const storeSlides = () => {
        if (state.renderBanner === true) {
            for (let i = 0; i < personalDetails.length; i += 1) {
                slides.push(
                    <SwiperSlide key={`slide-${i}`}>
                        <div className='banner__img'
                            style={{ backgroundImage: `linear-gradient(to left, rgba(255, 0, 0, 0), rgba(41, 40, 40, 1)), url(${state.imgUrl[i]})` }}>
                            <div className='center-content banner__content'>
                                <div className='banner__title'>{state.title[i]}</div>
                                <div className='banner__subtitle'>{state.subtitle[i]}</div>
                                <button className='btn btn__primary'>
                                    <Link to="/contact-us">Contact me</Link>
                                </button>
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
                        onSlideChange={(swiper) => console.log('slide ' + swiper.activeIndex)}
                        onSwiper={(swiper) => console.log('slide ' + swiper.activeIndex)}
                        onReachEnd={() => console.log('End reached')}
                        navigation
                        pagination
                        /* autoplay={true} */>
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