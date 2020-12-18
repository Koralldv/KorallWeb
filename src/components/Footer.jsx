import React from 'react';

import { Link as Links } from 'react-scroll';

function Footer({ linkItems, footetItems }) {
    const [activeItem, setActiveItem] = React.useState(0);
    return (
        <footer className="footer-area contact" id="contact_page">
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="page-title text-center">
                                <h5 className="title">{footetItems.underTitle}</h5>
                                <h3 className="dark-color">{footetItems.title}</h3>
                                <div className="space-60"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {footetItems.items.map(function (item, i) {
                            return (
                                <div className="col-xs-12 col-sm-4" key={i}>
                                    <div className="footer-box">
                                        <div className="box-icon">
                                            <span className={`lnr ${item.icon}`}></span>
                                        </div>
                                        {item.list.map(function (itemLi, i) {
                                            return <p key={i}>{itemLi}</p>;
                                        })}
                                    </div>
                                    <div className="space-30 hidden visible-xs"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-5">
                            <span>
                                Copyright &copy; All rights reserved{' '}
                                <i className="lnr lnr-heart" aria-hidden="true">
                                    {' '}
                                </i>{' '}
                                by
                                {'  '}
                                <a href="https://wa.me/89145860291">KorallWeb</a>
                            </span>

                            <div className="space-30 hidden visible-xs"></div>
                        </div>
                        <div className="col-xs-12 col-md-7">
                            <div className="footer-menu">
                                <ul>
                                    {linkItems.map(function (item, i) {
                                        return (
                                            <li
                                                key={`${item.id}_${i}`}
                                                onClick={() => setActiveItem(i)}
                                                className={activeItem === i ? 'active' : ''}>
                                                <Links
                                                    activeClass="active"
                                                    to={item.id}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}>
                                                    {item.name}
                                                </Links>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
