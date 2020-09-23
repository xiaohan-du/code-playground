import React from 'react';
import './ImageGrid.scss';

const ImageGrid = ({ colNo, images }) => {

    const RenderImages = () => {

        return (
            <div style={{ columnCount: colNo }} className='image-grid'>
                {
                    images.map(
                        (image) => {
                            return (
                                <img key={image.id} className='image-grid--img' src={image.path} alt='test' />
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