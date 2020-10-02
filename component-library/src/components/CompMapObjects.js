// Render the same components with map and map data from object array, this is the component being rendered
import React from 'react';

const CompMapObjects = ({ id, title, price }) => {
    return (
        <>
            <div key={id}>
                <p>{id}. {title}</p>
                <p>{price}</p>
            </div>
        </>
    )
}

export default CompMapObjects;