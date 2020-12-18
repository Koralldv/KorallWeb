import React from 'react';

import Fade from 'react-reveal/Fade';
import Popup from './Popup';

import videiImage from '../images/video-image.jpg';
import playButton from '../images/play-button.png';

function Video({ videoItems }) {
    const video = 'https://www.youtube.com/watch?v=x839ucBsVy8';

    const [activePopup, setActivePopup] = React.useState(null);
    const [activePopupBrif, setActivePopupBrif] = React.useState(null);

    return (
        <section className="video-area section-padding FAQ">
            {activePopup === true ? (
                <Popup
                    setActivePopup={(activePopup) => setActivePopup(!activePopup)}
                    activePopup={activePopup}
                    video={video}
                    type="video"
                />
            ) : (
                ''
            )}
            {activePopupBrif === true ? (
                <Popup
                    setActivePopup={(activePopupBrif) => setActivePopupBrif(!activePopupBrif)}
                    activePopup={activePopupBrif}
                    type="brif"
                />
            ) : (
                ''
            )}
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="video-photo">
                            <img src={videiImage} alt="" />
                            <button
                                className="popup video-button"
                                onClick={() => setActivePopup(!activePopup)}>
                                <img src={playButton} alt="" />
                            </button>
                        </div>
                    </div>
                    {videoItems.map(function (item, i) {
                        return (
                            <div
                                className="col-xs-12 col-md-5 col-md-offset-1"
                                key={`${item}_${i}`}>
                                <div className="space-60 hidden visible-xs"></div>
                                <div className="page-title">
                                    <Fade bottom delay={200}>
                                        <h5 className="title">{item.underTitle}</h5>
                                    </Fade>
                                    <div className="space-10"></div>
                                    <Fade bottom delay={400}>
                                        <h3 className="dark-color">{item.title}</h3>
                                    </Fade>
                                    <div className="space-20"></div>
                                    <Fade bottom delay={600}>
                                        <div className="desc">
                                            <p>{item.text}</p>
                                        </div>
                                    </Fade>
                                    <div className="space-50"></div>
                                    <Fade bottom delay={800}>
                                        <button
                                            onClick={() => setActivePopupBrif(!activePopupBrif)}
                                            className="bttn-default">
                                            Оставить заявку
                                        </button>
                                    </Fade>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Video;
