import React from 'react';

function Slider2({ item, i }) {
    return (
        <div className="item" key={i}>
            <img src={item} alt="" />
        </div>
    );
}

export default Slider2;
