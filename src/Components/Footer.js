import React from 'react';
import { Link } from 'react-router-dom';
import youtube from '../img/icon/bxl-youtube.png';
import fb from '../img/icon/bxl-facebook.png';
import instra from '../img/icon/bxl-instagram.png';
import twiter from '../img/icon/bxl-twitter.png';
import whatsapp from '../img/icon/bxl-whatsapp.png';

const Footer = () => {
    const todayYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <div><Link to="/" className="logo">Power <span className="primaryColor">X</span></Link></div>

                <div>
                    <h5>Need Help?</h5>
                    <ul>
                        <li><a href="/">Help Center</a></li>
                        <li><a href="/">Email Support</a></li>
                        <li><a href="/">Live Chat</a></li>
                        <li><a href="/">Gift Certificates</a></li>
                        <li><a href="/">Send Us Feedback</a></li>
                    </ul>
                </div>

                <div>
                    <h5>Digitals Resources</h5>
                    <ul>
                        <li><a href="/">Articles</a></li>
                        <li><a href="/">E-books</a></li>
                    </ul>
                </div>

                <div >
                    <h5>Contact with Us</h5>
                    <a href="#"><img className="socialLogo" src={youtube}alt=""/></a>
                    <a href="#"><img className="socialLogo fb" src={fb} alt=""/></a>
                    <a href="#"><img className="socialLogo" src={instra} alt=""/></a>
                    <a href="#"><img className="socialLogo" src={twiter} alt=""/></a>
                     <a href="#"><img className="socialLogo" src={whatsapp} alt=""/></a><br/>
                    <ul>
                        <li><a href="/">Forum</a></li>
                    </ul>
                </div>

                <div>
                    <h5>Join Our Newsletter</h5>

                    <p>Get exclusive news, features, and updates from The Shredder Weight Loss Academy</p>
                </div>
            </div>

            <p className="copyright">&copy; {todayYear} <a href="https://power-x-gym-gr12.web.app" className="footerLink" target="_blank" rel="noopener noreferrer">Power X Gym</a>. All Right Reserved.</p>
        </footer>
    );
};
export default Footer;