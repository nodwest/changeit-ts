import React from 'react';
import './Header.css'
import hand from '../../img/header/header-bgi.svg'

const Header = () => {

    return (
        <header className="header">
            <div className="header-top">
                <div className="logo">Change
                    <span> .it </span>
                </div>
                <div className="header-nav-container">
                    <div className="header__burger"></div>
                    <ul className="nav-menu">
                        <li className="nav-menu__item">
                            <a href="src/Components/NavMenu/NavMenu#advantage"> Overview</a>
                        </li>
                        <li className="nav-menu__item">
                            <a href="src/Components/NavMenu/NavMenu#questions"> How it works</a>
                        </li>
                        <li className="nav-menu__item">
                            <a href="src/Components/NavMenu/NavMenu#feedback"> Reviews</a>
                        </li>
                        <li className="nav-menu__item">
                            <a href="src/Components/NavMenu/NavMenu#form"> Checklist</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="header-container">
                <div className="header-info">
                    <div className="header-info__title">Change your name <span>quickly!</span></div>
                    <button className="header-info__button">Get started now</button>
                </div>
                <div className="header-description">
                    Starting a new chapter in your life should be
                    <p>a time of excitement and fresh beginnings.</p>
                </div>
            </div>

            <div className="header__img">
                <img className="" src={hand} alt="hand"/>
            </div>
        </header>
    );
};

export default Header;
