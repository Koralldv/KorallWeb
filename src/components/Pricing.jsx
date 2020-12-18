import React from 'react';

import Popup from './Popup';

function Pricing({ procingItems }) {
    const [activePopup, setActivePopup] = React.useState(null);

    const popupItems = [
        {
            title: '132',
            text_1: 'Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do.',
            text_2:
                'Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.',
            button_title: 'Понятно!',
        },
    ];
    return (
        <section className="section-padding price-area price" id="price_page">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="page-title text-center">
                            <h5 className="title">{procingItems.underTitle}</h5>
                            <h3 className="dark-color">{procingItems.title}</h3>
                            <div className="space-60"></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {procingItems.items.map(function (item, i) {
                        return (
                            <div className="col-xs-12 col-sm-6 col-md-4 col-xs-12" key={i}>
                                <div className="price-box">
                                    <div className="price-header">
                                        <div className="price-icon">
                                            <span className={`lnr ${item.icon}`}></span>
                                        </div>
                                        <h4 className="upper">{item.title}</h4>
                                    </div>
                                    <div className="price-body">
                                        <ul>
                                            {item.list.map(function (itemLi, i) {
                                                return <li key={i}>{itemLi}</li>;
                                            })}
                                        </ul>
                                    </div>
                                    <div className="price-rate">
                                        <sup>&#8381;</sup>{' '}
                                        <span className="rate">{item.price}</span>{' '}
                                    </div>
                                    <div className="price-footer">
                                        <button
                                            onClick={() => setActivePopup(!activePopup)}
                                            className="bttn-white">
                                            {item.buttonPrice}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-30 hidden visible-xs"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {activePopup === true ? (
                <Popup
                    setActivePopup={(activePopup) => setActivePopup(!activePopup)}
                    activePopup={activePopup}
                    popupItems={popupItems}
                    procingItems={procingItems.items}
                    type="price"
                />
            ) : (
                ''
            )}
        </section>
    );
}

export default Pricing;
