import React from 'react';
import { Link } from 'react-router-dom';

import { Link as Links } from 'react-scroll';
import logo from '../images/logo.png';
import Popup from './Popup';

function Nav({ linkItems }) {
    const [activeItem, setActiveItem] = React.useState(0);
    const [activeNav, setActiveNav] = React.useState(0);
    const [activePopup, setActivePopup] = React.useState(null);

    let high = React.useRef(null);
    const handleScroll = () => {
        high = window.scrollY;
        if (high > 100) {
            setActiveNav(!activeNav);
        } else if (high < 100) {
            setActiveNav(activeNav);
        }
    };

    const popupItems = [
        {
            title: 'Start your amazing stuff through appy.',
            text_1: 'Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do.',
            text_2:
                'Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.',
            button_title: 'Понятно',
        },
    ];

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`mainmenu-area Home ${activeNav === true ? 'affix' : ''}`}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#primary_menu">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="primary_menu">
                    <ul className="nav navbar-nav mainmenu">
                        {linkItems.map(function (item, i) {
                            return item.out === true ? (
                                <li
                                    key={`${item.id}_${i}`}
                                    className={activeItem === i ? 'active' : ''}>
                                    <Link
                                        to={item.id === 'home' ? '/' : item.id}
                                        onClick={() => setActiveItem(i)}>
                                        {item.id !== 'Home' ? `${item.id}` : 'Home'}
                                    </Link>
                                </li>
                            ) : (
                                <li
                                    key={`${item.id}_${i}`}
                                    className={activeItem === i ? 'active' : ''}>
                                    <Links
                                        onClick={() => setActiveItem(i)}
                                        className="active"
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
                    <div className="right-button hidden-xs">
                        <button onClick={() => setActivePopup(!activePopup)}>БРИФ</button>
                        {activePopup === true ? (
                            <Popup
                                setActivePopup={(activePopup) => setActivePopup(!activePopup)}
                                activePopup={activePopup}
                                popupItems={popupItems}
                                type="brif"
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
