import React from 'react';

import Fade from 'react-reveal/Fade';
import featureImage from '../images/feature-image.png';

function Features({ featuresItems }) {
    return (
        <section className="feature-area section-padding-top Features" id="features_page">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                        <div className="page-title text-center">
                            <h5 className="title">{featuresItems.underTitle}</h5>
                            <div className="space-10"></div>
                            <h3>{featuresItems.title}</h3>
                            <div className="space-60"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <Fade bottom delay={400}>
                            {featuresItems.items1.map(function (item, i) {
                                return (
                                    <div className="service-box" key={i}>
                                        <div className="box-icon">
                                            <i className={`lnr ${item.styleClass}`}></i>
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text} </p>
                                        <div className="space-60"></div>
                                    </div>
                                );
                            })}
                        </Fade>
                    </div>
                    <div className="hidden-xs hidden-sm col-md-4">
                        <figure className="mobile-image">
                            <img src={featureImage} alt="" />
                        </figure>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <Fade bottom delay={400}>
                            {featuresItems.items2.map(function (item, i) {
                                return (
                                    <div className="service-box" key={i}>
                                        <div className="box-icon">
                                            <i className={`lnr ${item.styleClass}`}></i>
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text} </p>
                                        <div className="space-60"></div>
                                    </div>
                                );
                            })}
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
