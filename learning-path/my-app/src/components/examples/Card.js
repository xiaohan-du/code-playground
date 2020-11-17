import React from 'react';
const Card = ({ props: { name, address: { address1, address2, city } } }) => {
    return (
        <>
            <div>
                {name} lives in {address1}, {address2}, {city}
            </div>
        </>
    )
}
export default Card;