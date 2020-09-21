import React from 'react';
import './Tile.scss';
import tileBg from '../images/shutterstock_1302552622.jpg';
import tileImg from '../images/shutterstock_696636415.jpg';

const Tile = () => {

    return (
        <>
            <div className='tile__wrapper'>
                <div className='center-content'>
                    <div className='tile'>
                        <div className='tile__textbox'>
                            <p className='tile__textbox__title'>
                                Justo petentium te vix, scripta regione urbanitas
                        </p>
                            <p className='tile__textbox__content'>
                                Pcpulc facilisi nam no, dolor deleniti deseruisse ne rum, nam quodsi aliquam eligendi ne. Ferri
                                euismod accusata te nm:, summo accumsan at uin Ad vix legere impetus, nam consequat
                                reformidans "t, No sit consul integre voluptatibus, omnium lucilius ne meL Et ancillae recteque
                                deterruisset sea, ea nec odio option, ferri assum eum et.
                        </p>
                            <ul className='tile__textbox__list'>
                                <li>
                                    Te pri efficiendi assueverit, id molestie suavitate per
                            </li>
                                <li>
                                    Te nam dolorem rationibus repudiandae, ne ius falli aliquip consetetur
                            </li>
                                <li>
                                    Ut qui dicant copiosae interpretaris
                            </li>
                                <li>
                                    ut indoctum patrioque voluptaria duo, ut vis semper abhorreant
                            </li>
                            </ul>
                            <div>
                                <button className='btn btn__primary'>Learn more</button>
                            </div>
                        </div>
                        <div style={{backgroundImage: `url(${tileImg})`}} className='tile__image'>
                            {/* <img className='tile__image' src={require('../images/shutterstock_696636415.jpg')} alt='tile' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${tileBg})` }} className='tile__wrapper'>
                <div className='center-content'>
                    <div className='tile'>
                        <div className='tile__textbox tile__textbox-bg'>
                            <p className='tile__textbox__title'>
                                Nulla sem urna, dictum sed nisi in, viverra rutrum neque
                            </p>
                            <p className='tile__textbox__content'>
                                Cras sit amet dapibus magna. Orci varius natoque penatibus et magnis dis parturient
                                mantes, nascetur ridiculus mus. Donec finibus nulla quis lorem mollis lacinia. Fusce ut
                                arcu ligula. pellentesque augue ex, pellentesque ut maximus nan, eleifend ut lorem,
                                Vestibulum rutrum malesuada turpis, molestie matts velit maximus ac. Quisque iaculis
                                hendrerit ex et tincidunt. Aenean eu magna ut nisi placerat fringilla in sed diam.
                            </p>
                            <div>
                                <button className='btn btn__light'>Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tile;