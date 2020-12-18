import React from 'react';
import Popup from './Popup';

function OurFeatures({ our }) {
    // state = {
    //     activeItem: false,
    // };
    // const [activePopup, setActivePopup] = React.useState(null);
    // const [activeItem, setActiveItem] = React.useState(null);
    const [activePopup, setActivePopup] = React.useState(null);
    // const change = () => {
    //     setActiveItem(!activeItem);
    // };

    const popupItems = [
        {
            title: 'Start your amazing stuff through appy.',
            text_1: 'Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do.',
            text_2:
                'Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.',
            button_title: 'Понятно!',
        },
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="page-title">
                            <h5 className="title">{our.underTitle}</h5>
                            <div className="space-10"></div>
                            <h3 className="dark-color">{our.title}</h3>
                        </div>
                        <div className="space-20"></div>
                        <div className="desc">
                            <p>{our.text}</p>
                        </div>
                        <div className="space-50"></div>
                        <button
                            onClick={() => setActivePopup(!activePopup)}
                            className="bttn-default">
                            Подробнее
                        </button>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                        <div className="space-60 hidden visible-xs"></div>
                        {our.ourItems.map((items, i) => (
                            <div className="service-box" key={i + Math.random}>
                                <div className="box-icon">
                                    <i className={`lnr ${items.icon}`}></i>
                                </div>
                                <h4>{items.title}</h4>
                                <p>{items.text}</p>
                                <div className="space-50"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {activePopup === true ? (
                <div className="bg_popup">
                    <Popup
                        setActivePopup={(activePopup) => setActivePopup(!activePopup)}
                        activePopup={activePopup}
                        popupItems={popupItems}
                    />
                </div>
            ) : (
                ''
            )}
        </section>
    );
}

export default OurFeatures;
