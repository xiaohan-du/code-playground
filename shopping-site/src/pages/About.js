import React from 'react';
import aboutImg from '../images/shutterstock_696636415.jpg'
import './About.scss';

const About = () => {
    return (
        <>
            <div className='about'>
                <div className='center-content'>
                    <h1 className='about__title'>About us</h1>
                    <p className='about__subtitle'>
                        Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Perri euismod accusata te net, summo accumsan at vix.
                </p>

                    <div>
                        <p className='about__content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit_ Nunc pulvinar enim sed quam efficitur finibus. Fusce efficitur condimentum orri in hendrerit_ Etiam aliquam vitae ante et scelerisque_ Pellentesque
                            commodo felis metus, nec congue nisi facilisis quis_ Aenean maximus Bibendum cangue. Nulla pretium elit non facilisis imperdiet. Curabitur auctor lacus turpis, quis fringilla quam faucibus sed. Sed consequat
                            magna enim, eu efficitur purus viuerra sit amet. <a href='#/' className='about__content__link'>Praesent varius porta blandit</a> mollis, felis ut convallis convallis.
                        </p>


                        <p className='about__content'>
                            Quisque non lectus dolom In id dictum ek Aenean Iaoreet velit sem, in dictum orci cursus sit amen Duis ex est, aliquam quis tincidunt ut, imperdiet a lacus Vestibulum condimentum vehicula nisl, at vestibulum
                            uelit uarius sit amen Cras lacinia facilisis tempuq pasce nec tempus mauris_ Sed vitae diam porta, tincidunt orci ac, maximus enitn Integer sodales sodales turpis, sit amet ultricies arcu lacinia id. Pellentesque
                            volutpat in massa sit amet venenatis. Aliquam erat volutpat. Sed mcllis, felis ut ccnuallis convallis, nibh quam fringilla metus, a tempus metus nunc a se'n Morbi ut metus tincidunt, mollis arci quis, efficitur nibh.
                        </p>
                        <div style={{ backgroundImage: `url(${aboutImg})` }} className='about__img' >.</div>
                        <p className='about__content'>
                            Integer ullamcorper nisi non ultricies consequat. Mauris at ipsum vel erat fringilla placerat ut eget niblm Mauris vehicula a lectus dignissim ultrices. Sed cangue nec libero sit amet vestibulu'n Donec dignissim nec
                            ligula quis placerat Vivamus pcrttitor sed urna nec semper tras bibendum, est vitae placerat ultricies, diam massa cangue magna, quis blandit nibh ante vitae nibh_ Aliquam eu lobcrtis augue, eu vestibulum
                            lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit_ Curabitur a ligula vitae nisl blandit tempus ut sit amet urna Mauris convallis nisl a interdum semper Fusce interdum ullamcorper Purus sed
                            aliquam_ Fusce ut mollis nisi, quis lacinia quam. Donec ligula metus, volutpat a odic euismod, dapibus iaculis arcu. Ut lobortis magna vehicula Iaoreet feugiat.
                        </p>
                        <h5>
                            Taria duo ut vis semper abhorreant:
                        </h5>
                        <ul className='about__list'>
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
                                Ut indoctum patrioque voluptaria duo, ut vis semper abhorreant
                            </li>
                        </ul>
                        <p className='about__content'>
                            Suspendisse vel nisi id odio consequat aliquam quis ac nisl_ Vestibulum orci enim, porta viverra egestas Iaoreet, sollicitudin et orci. ut id lacinia torton Sed et sollicitudin diam, sed facilisis ergs. Donec sit amet
                            consequat neque, Donec tristique tincidunt mi sed tincidunr Suspendisse quis augue eget quam ullamcorper ultricies sed non justo,
                        </p>
                        <p className='about__content'>
                            Maecenas eu mauris felis_ Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum suscipit sem at venenatis vulputatæ Integer blandit est ut nunc dignissim
                            malesuada Sed gravida quis turpis ut blandir In hac habitasse platea dictumst. In facilisis tellus ipsum, vitae finibus eros condimentum Sed non iaculis magna_ Donec molestie congue tellus, nec lacinia leo
                            finibus nan. Mauris ut nibh pharetra, placerat mauris vel, semper sapiem Proin aliquet quis nibh sit amet hendrerit_ ut sit amet mcllis ligula. Sed auctor accumsan nisi vel luctus Curabitur eget nisl hendrerit,
                            tempus purus vel, rhoncus lectus_ Nullam diam velit, porta id nisl ac, suscipit sagittis nequæ Quisque eu luctus diam.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;

