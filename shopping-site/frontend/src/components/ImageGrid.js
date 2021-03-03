import React from 'react';
import './ImageGrid.scss';
import FlipCard from '../components/FlipCard';

import useWindowSize from '../hooks/useWindowSize';

const screenWidth = {
    tabletPortrait: 767,
    phone: 575
}

const ImageGrid = ({ colNo, images }) => {

    const RenderImages = () => {

        let cardRows = [];

        const [windowWidth] = useWindowSize();
        let _colNo = colNo;

        if (windowWidth < screenWidth.tabletPortrait && windowWidth > screenWidth.phone) {
            _colNo = colNo - 1;
        }
        else if (windowWidth < screenWidth.phone && _colNo > 2) {
            _colNo = colNo - 2;
        }
        else if (_colNo < 2) {
            _colNo = 1;
        }

        for (let i = 0; i < images.length; i = i + _colNo) {
            cardRows.push(
                <div className='columns is-gapless image-grid' key={i}>
                    {
                        images.slice(i, i + _colNo).map(
                            (image) => {
                                return (
                                    <div className='column' key={image.id}>
                                        <FlipCard key={image.id}
                                            img={image}
                                        />
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            )
        }
        return (
            <>
                {cardRows}
            </>
        )

    };

    return (
        <>
            <RenderImages />
        </>
    )
}

export default ImageGrid;