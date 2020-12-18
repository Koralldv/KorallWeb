import React from 'react';
// import Popup from './Popup';

class OurFeatures extends React.Component {
    state = {
        activeItem: false,
    };

    change() {
        this.setState({
            activeItem: !this.state.activeItem,
        });
    }

    render() {
        const { our } = this.props;
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
                                onClick={() => {
                                    this.change();
                                }}
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
                {this.state.activeItem === true ? (
                    <div className="bg_popup">
                        Hello world
                        <button
                            onClick={() => {
                                this.change();
                            }}
                            className="bttn-default">
                            Понятно
                        </button>
                    </div>
                ) : (
                    ''
                )}
            </section>
        );
    }
}

export default OurFeatures;
