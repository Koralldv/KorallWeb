import React from 'react';

import Fade from 'react-reveal/Fade';
import Slider from '../components/Slider';

const sliderConf = {
    sliderName: 'Slider2',
    spaceBetween: 0,
    slidesPerView: 4,
    loop: true,
    delay: 1500,
    speed: 1000,
    disableOnInteraction: true,
    nextEl: false,
    prevEl: false,
    pagination: true,
    breakpoints: [1, 1, 1, 3, 4],
};

function Screenshot({ screenshot }) {
    return (
        <section className="gallery-area section-padding partf" id="gallery_page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 gallery-slider">
                        <div className="gallery-slide">
                            <Slider items={screenshot} sliderConf={sliderConf}></Slider>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-lg-3">
                        <div className="page-title">
                            <Fade bottom delay={200}>
                                <h5 className="white-color title">Screenshots</h5>
                            </Fade>
                            <div className="space-10"></div>
                            <Fade bottom delay={400}>
                                <h3 className="white-color">Lorem ipsum </h3>
                            </Fade>
                        </div>
                        <div className="space-20"></div>
                        <Fade bottom delay={600}>
                            <div className="desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do
                                    eiusmod tempor incididunt ut labore et laborused sed do eiusmod
                                    tempor incididunt ut labore et laborused.
                                </p>
                            </div>
                        </Fade>
                        <div className="space-50"></div>
                        <Fade bottom delay={800}>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.spotify.music&hl=ru&gl=US"
                                className="bttn-default">
                                Скачать
                            </a>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Screenshot;
