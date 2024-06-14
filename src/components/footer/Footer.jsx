import React from 'react';
import './footer.scss';
import iconBe from '../../assets/iconBe.svg';
import iconGithub from '../../assets/iconGithub.svg';
import iconDribble from '../../assets/dribble.svg';
import iconLinkedin from '../../assets/iconLinkedin.svg';
import iconFacebook from '../../assets/Facebook.svg'

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <h3 className="footer__text-gmail">anhlamot55@gmail.com</h3>
                <div className="i-sci">
                    <div className="i-backgroupdS">
                        <a href="https://www.behance.net/anhlamot55" target="__blank" className="i-link">
                            <img src={iconBe} alt="Behance" className="i__icon-img" />
                        </a>
                    </div>
                    <div className="i-backgroupdS">
                        <a href="https://dribbble.com/KhanhLoc" target="__blank" className="i-link">
                            <img src={iconDribble} alt="Gmail" className="i__icon-img" />
                        </a>
                    </div>
                    <div className="i-backgroupdS">
                        <a
                            href="https://www.linkedin.com/in/loc-nguyenkhanh-927b0822a/"
                            className="i-link"
                            target="__blank"
                        >
                            <img src={iconLinkedin} alt="Linkedin" className="i__icon-img" />
                        </a>
                    </div>
                    <div className="i-backgroupdS">
                        <a href="https://www.facebook.com/NhiLove.kha.14473" target="__blank" className="i-link">
                            <img src={iconFacebook} alt="facebook" className="i__icon-img" />
                        </a>
                    </div>
                    <div className="i-backgroupdS">
                        <a href="https://github.com/KhanhLoc55" className="i-link" target="__blank">
                            <img src={iconGithub} alt="Github" className="i__icon-img" />
                        </a>
                    </div>
                </div>
                <h3 className="footer__text">Copyright © Communitypro 2023, All rights reserved</h3>
            </div>
        </div>
    );
};

export default Footer;
