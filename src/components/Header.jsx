import React from 'react';

import Fade from 'react-reveal/Fade';

import Popup from './Popup';
import headerMobile from '../images/header-mobile.png';

function Header() {
    const [activePopup, setActivePopup] = React.useState(null);

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
        <header className="home-area overlay home" id="home_page">
            <div className="container">
                <div className="row">
                    <Fade delay={200}>
                        <div className="col-xs-12 hidden-sm col-md-5">
                            <figure className="mobile-image ">
                                <img src={headerMobile} alt="" />
                            </figure>
                        </div>
                    </Fade>
                    <div className="col-xs-12 col-md-7">
                        <div className="space-80 hidden-xs"></div>
                        <Fade bottom delay={600}>
                            <h1 className="">Start your amazing stuff through appy.</h1>
                        </Fade>
                        <div className="space-20"></div>
                        <Fade bottom delay={800}>
                            <div className="desc ">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do
                                    eiusmod tempor incididunt ut labore et laborused sed do eiusmod
                                    tempor incididunt ut labore et laborused.
                                </p>
                            </div>
                        </Fade>
                        <div className="space-20"></div>
                        <Fade bottom delay={800}>
                            <button
                                onClick={() => setActivePopup(!activePopup)}
                                className="bttn-white">
                                <i className="lnr lnr-download"></i>Подробнее
                            </button>
                        </Fade>
                    </div>
                </div>
            </div>
            {activePopup === true ? (
                <Popup
                    setActivePopup={(activePopup) => setActivePopup(!activePopup)}
                    activePopup={activePopup}
                    popupItems={popupItems}
                />
            ) : (
                ''
            )}
        </header>
    );
}

export default Header;
