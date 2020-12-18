import React from 'react';

import aboutLogo from '../images/about-logo.png';

class About extends React.Component {
    render() {
        const { aboutItems } = this.props;

        return (
            <section className="about" id="about_page">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1">
                            <div className="page-title text-center">
                                <img src={aboutLogo} alt="About Logo" />
                                <div className="space-20"></div>
                                <h5 className="title">{aboutItems.underTitle}</h5>
                                <div className="space-30"></div>
                                <h3 className="blue-color">{aboutItems.title}</h3>
                                <div className="space-20"></div>
                                <p>{aboutItems.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-50"></div> <div className="space-50"></div>
            </section>
        );
    }
}

export default About;
