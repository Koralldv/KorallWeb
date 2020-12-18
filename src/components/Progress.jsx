import React from 'react';

import Fade from 'react-reveal/Fade';
import Popup from './Popup';
import progressPhone from '../images/progress-phone.png';

function Progress() {
    const [activePopup, setActivePopup] = React.useState(null);

    const popupItems = [
        {
            title: 'OUR PROGRESS',
            text_1:
                'Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.',
            text_2: 'Consectetur adipiing elit, sed do eiusmod tempor',
            button_title: 'Понятно!',
        },
    ];

    return (
        <section className="progress-area gray-bg Progress" id="progress_page">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="page-title section-padding">
                            <Fade bottom delay={400}>
                                <h5 className="title">Our Progress</h5>
                            </Fade>
                            <div className="space-10"></div>
                            <Fade bottom delay={600}>
                                <h3 className="dark-color">Grat Application Ever</h3>
                            </Fade>
                            <div className="space-20"></div>
                            <Fade bottom delay={800}>
                                <div className="desc wow fadeInUp">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiing elit, sed
                                        do eiusmod tempor incididunt ut labore et laborused sed do
                                        eiusmod tempor incididunt ut labore et laborused.
                                    </p>
                                </div>
                            </Fade>
                            <div className="space-50"></div>
                            <button
                                onClick={() => setActivePopup(!activePopup)}
                                href="#"
                                className="bttn-default">
                                Узнать
                            </button>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <figure className="mobile-image">
                            <img src={progressPhone} alt="" />
                        </figure>
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
        </section>
    );
}

export default Progress;
