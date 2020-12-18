import React from 'react';

import YouTube from 'react-youtube';
import Fade from 'react-reveal/Fade';

import Brif from './Brif';

const opts = {
    videoId: 'QQZmDWnV618',
    playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 1,
    },
};
function Popup({ setActivePopup, activePopup, popupItems, video, type, procingItems }) {
    return (
        <div className={video ? 'bg_popupVideo' : 'bg_popup'}>
            {type === 'brif' ? (
                <Fade duration={600}>
                    <div className="newPopup">
                        <Brif />
                        <button
                            onClick={() => setActivePopup(activePopup)}
                            className="bttn-default btn-off">
                            &#10006;
                        </button>
                    </div>
                </Fade>
            ) : type === 'video' ? (
                <div className="newPopupVideo">
                    <Fade>
                        <YouTube videoId={opts.videoId} opts={opts} />
                        <button
                            onClick={() => setActivePopup(activePopup)}
                            className="bttn-default">
                            &#10006;
                        </button>
                    </Fade>
                </div>
            ) : type === 'price' ? (
                popupItems.map(function (popupItem, i) {
                    return (
                        <Fade duration={600} key={i}>
                            <div className="newPopup">
                                <h2>{procingItems[i].title}</h2>
                                <p>{popupItem.text_1}</p>
                                <p>{popupItem.text_2}</p>
                                <button
                                    onClick={() => setActivePopup(activePopup)}
                                    className="bttn-default">
                                    {popupItem.button_title}
                                </button>
                            </div>
                        </Fade>
                    );
                })
            ) : (
                popupItems.map(function (popupItem, i) {
                    return (
                        <Fade duration={600} key={i}>
                            <div className="newPopup">
                                <h2>{popupItem.title}</h2>
                                <p>{popupItem.text_1}</p>
                                <p>{popupItem.text_2}</p>
                                <button
                                    onClick={() => setActivePopup(activePopup)}
                                    className="bttn-default">
                                    {popupItem.button_title}
                                </button>
                            </div>
                        </Fade>
                    );
                })
            )}
        </div>
    );
}

export default Popup;
