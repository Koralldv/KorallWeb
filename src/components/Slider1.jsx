import React from 'react';

function Slider1({ item, i }) {
    return (
        <div className="team-box" key={i}>
            <div className="team-image">
                <img src={`${item.icon}`} alt="" />
            </div>
            <h4>{item.name}</h4>
            <h6 className="position">{item.position}</h6>
            <p>{item.info}</p>
        </div>
    );
}

export default Slider1;
