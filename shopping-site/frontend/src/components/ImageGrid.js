import React from 'react';
import './ImageGrid.scss';
import FlipCard from '../components/FlipCard';

const ImageGrid = ({ colNo, images }) => {

    const RenderImages = () => {

        return (
            <div style={{ columnCount: colNo }} className='image-grid'>
                {
                    images.map(
                        (image) => {
                            return (
                                <FlipCard key={image.id}
                                    img={image}
                                />
                            )
                        }
                    )
                }
            </div>
        )

    };

    return (
        <>
            <RenderImages />
        </>
    )
}

export default ImageGrid;