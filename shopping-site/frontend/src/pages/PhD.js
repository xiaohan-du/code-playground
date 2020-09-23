import React from 'react';
import './About.scss';
import ImageGrid from '../components/ImageGrid';


const images = [
    { id: 1, path: require('../images/phd/img1.png') },
    { id: 2, path: require('../images/phd/img2.png') },
    { id: 3, path: require('../images/phd/img3.png') },
    { id: 4, path: require('../images/phd/img4.png') },
    { id: 5, path: require('../images/phd/img5.png') },
    { id: 6, path: require('../images/phd/img6.png') },
    { id: 7, path: require('../images/phd/img7.png') },
    { id: 8, path: require('../images/phd/img8.png') },
    { id: 9, path: require('../images/phd/img9.png') },];


const About = () => {
    return (
        <>
            <div className='about'>
                <div className='center-content'>
                    <h1 className='about__title'>I hold a PhD in computational mechanics</h1>
                    <p className='about__subtitle'>
                        Title: Accuracy Control and Nonintrusive Implementation of Adaptive Reduced Order Modelling Based on Greedy Sampling for
                        Elasto-dynamics
                    </p>

                    <div>
                        <p className='about__content'>
                            Summary: parametric problems have been widely studied and many researches
                            have been provided to reduce the cost of computations.
                            Reduced order modelling (ROM) achieves this goal by performing
                            and storing a sequence of pre-computations in an expensive “offline” stage,
                            and utilises these stored data to make predictions of solutions for
                            parametric problems in an “online” stage with cheap cost.
                            (POD -) Greedy sampling algorithm is a powerful tool to obtain those pre-computations.
                        </p>
                        <div className='center-content'>
                            <ImageGrid colNo={3} images={images} />
                        </div>
                        <p className='about__content'>
                            In this thesis, I presented a new POD-Greedy sampling algorithm which utilises a new error indicator.
                            This error indicator aims to predict paths of the optimum max- imum error convergence.
                            Standard POD-Greedy approach requires exact solutions over the entire parameter domain
                            when a-posteriori error estimate is not available, thus no practical use.
                            Instead, the proposed POD-Greedy algorithm avoids computations of
                            the massive number of exact computations in order to improve the numerical efficiency.
                            Another contribution is an “error in the error” indicator which drives the
                            local adaptivity of interpolation sample grids.
                            This indicator compares low and high order interpolation scheme to
                            obtain the correct sequence of local h − refinement and Greedy iterations.
                            Finally I proposed a nonintrusive Abaqus/Matlab code coupling technique
                            to allow seamless integration of commercial software and Matlab source code in computations of exact solutions.
                            I also proved the accuracy and feasibility of the proposed methods on varieties of test cases.
                        </p>
                        <p className='about__subtitle'>Still confused? check these Wikipedia links to help you understand</p>
                        <div className='about__btn-set'>
                            <a href='https://en.wikipedia.org/wiki/Model_order_reduction'
                                className='btn btn__light btn__zoom-in'
                                type='button'>
                                Model Order Reduction
                            </a>
                            <a href='https://en.wikipedia.org/wiki/Principal_component_analysis'
                                className='btn btn__light btn__zoom-in'
                                type='button'>
                                POD (Proper Orthogonal Decomposition)
                            </a>
                            <a href='https://en.wikipedia.org/wiki/Greedy_algorithm'
                                className='btn btn__light btn__zoom-in'
                                type='button'>
                                Greedy algorithm
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;

