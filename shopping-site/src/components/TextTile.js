import React from 'react';
import { Link } from "react-router-dom";
import './TextTile.scss';
import './Tile.scss';

const TextTile = () => {

    return (
        <>
            <div className='tile__wrapper'>
                <div className='center-content'>
                    <div className='tile texttile'>
                        <p className='texttile__title'>Sed libero justo, lobortis sit amet suscipit non</p>
                        <p className='texttile__subtitle'>taria duo ut vis semper abhorreant</p>
                        <div className='texttile__content'>
                            <p className='texttile__content-strong'>
                                Pellentesque ac condimentum felis. Suspendisse vel suscipit
                                dolor, nec Iaoreet nulla. Nam auctor ultricies dapibus. Donec
                                ac interdum dui, quis finibus lectus. Cras in ultrices neque.
                                Curabitur eget turpis iaculis diam tongue sagittis a vel ligula.
                                Mauris ut arcu ex. Nullam quis orci ante. Nunc felis massa,
                                posuere non gravida in, commodo in arcu. In feugiat magna
                                non volutpat faucibus. Nam aliquam justo nec aliquam iaculis.
                                Integer laoreet pulvinar elit pulvinar fermentum. Morbi
                                vehicula sodales nunc ac varius. Proin porttitor porttitor libero
                                vel pharetra.
                            </p>
                            <p>
                                Cras sit amet dapibus magna Orci varius natoque penatibus et
                                magnis dis parturient mantes, nascetur ridiculus mus Donec
                                magnis dis parturient mantes, nascetur ridiculus mus Donec
                                finibus nulla quis lorem mcllis lacinia Fusce ut arcu ligula,
                                Pellentesque augue ex, pellentesque ut maximus nan, eleifend
                                ut lorem. Vestibulum rutrum malesuada turpis, molestie mattis
                                velit maximus ac Quisque iaculis hendrerit ex et tincidunt.
                                Aenean eu magna ut nisi placerat fringilla in sed diam.
                                Suspendisse tristique vel dui nec imperdiet. Cras mattis ligula
                                quis fermentum suscipit Proin et elementum arcu, sit amet
                                porttitor diam Curabitur euismod, eratvitae tristique volutpat,
                                augue lectus dignissim justo, at faucibus orri est a elit.
                            </p>
                            <p>
                                Sed sed sapien pretium, maximus felis vel, mollis elit_ Sed libero
                                justo, lobortis sit amet suscipit nan, auctor non libero. Maecenas
                                quis nisl eget enim porta blandit a nec sapien. Mauris porttitor
                                lorem ut egestas euismccl Donec molestie tempor nibh, nec
                                venenatis arcu ullamccrper sit amet Nulla facilisL Proin cursus
                                neque ut tortor scelerisque, at iaculis nunc ornare_ Pellentesque
                                non nunc nulla_ Interdum et malesuada fames ac ante ipsum
                                primis in faucibuq Aenean et scdales diatn Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Fusce porttitor magna
                                augue, non auctor quam placerat nec_ Nulla sem urna, dictum
                                sed nisi in, viverra rutrum negue_ Aliquam ipsum nunc, porta a
                                augue nec, fringilla mollis arcu_ In a vehicula odio_ Praesent
                                vulputate turpis eleifend egestas ultrices_ Proin nec sagittis nibh.
                                Curabitur fringilla felis a porttitor maxims Vestibulum aliquet
                                ante nec leo malesuada porttitor sit amet et magna.
                            </p>
                        </div>
                        <button className='btn btn__primary'>
                            <Link to="/contact-us">Contact us</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TextTile;
