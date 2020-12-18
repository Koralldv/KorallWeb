import React from 'react';

import Slider from '../components/Slider';

const sliderConf = {
    sliderName: 'Slider1',
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    delay: 1500,
    speed: 1000,
    disableOnInteraction: true,
    nextEl: '.nav-right',
    prevEl: '.nav-left',
    pagination: false,
    breakpoints: [1, 1, 2, 2, 3],
};

function Clients({ clients }) {
    return (
        <section className="testimonial-area reviews" id="testimonial_page">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="page-title text-center">
                            <h5 className="title">Testimonials</h5>
                            <h3 className="dark-color">Our Client Loves US</h3>
                            <div className="space-60"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="team-slide">
                            <Slider items={clients} sliderConf={sliderConf}></Slider>
                            <div className="nav-right">
                                <i className="lnr lnr-chevron-right"></i>
                            </div>
                            <div className="nav-left">
                                <i className="lnr lnr-chevron-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Clients;
