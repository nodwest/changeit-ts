import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer background-purple">
            <div className="footer__text">
                Newsletter
            </div>
            <input type="email" className="footer__email" placeholder="Enter Your Email"/>
            <div className="footer__copyright">
                © 2022 Change.it Ltd. All Rights Reserved
            </div>
            <ul className="footer__menu">
                <li><a href="#">Divorce</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Deed Poll Online</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
