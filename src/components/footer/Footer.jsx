import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../utils/context';
import LogoImg from '../../assets/KL-textLogo.svg';
import LogoImgWhite from '../../assets/KL-textLogowhite.svg';
import './footer.scss';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-scroll';

import {
    BehanceOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    DribbbleOutlined,
    GithubOutlined,
} from '@ant-design/icons';
const Footer = () => {
    // Sử dụng react-i18next để dễ dàng dịch nội dung
    const { t } = useTranslation();

    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // Ảnh logo hiện tại
    const [currentLogo, setCurrentLogo] = useState(LogoImg);

    // Cập nhật ảnh logo khi chủ đề thay đổi
    useEffect(() => {
        setCurrentLogo(darkMode ? LogoImgWhite : LogoImg);
    }, [darkMode]);

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const color = darkMode ? root.getPropertyValue('--primary-500') : root.getPropertyValue('--second-600');

    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="footer-line"></div>
                <div className="footer-content">
                    <Link to="header" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                        <img className="footer-logo" alt="logo" src={currentLogo} />
                    </Link>
                    <div className="footer-align">
                        <div className="footer-icon">
                            <a href="https://www.behance.net/anhlamot55" target="_blank" rel="noopener noreferrer">
                                <BehanceOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                        border: darkMode
                                            ? '1px solid var(--primary-500)'
                                            : '1px solid var(--second-600)',
                                    }}
                                />
                            </a>
                            <a href="https://dribbble.com/KhanhLoc" target="__blank" className="i-link">
                                <LinkedinOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                        border: darkMode
                                            ? '1px solid var(--primary-500)'
                                            : '1px solid var(--second-600)',
                                    }}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/loc-nguyenkhanh-927b0822a/"
                                target="__blank"
                                className="i-link"
                            >
                                <DribbbleOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                        border: darkMode
                                            ? '1px solid var(--primary-500)'
                                            : '1px solid var(--second-600)',
                                    }}
                                />
                            </a>
                            <a href="https://www.facebook.com/NhiLove.kha.14473" target="__blank" className="i-link">
                                <FacebookOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                        border: darkMode
                                            ? '1px solid var(--primary-500)'
                                            : '1px solid var(--second-600)',
                                    }}
                                />
                            </a>
                            <a href="https://github.com/KhanhLoc55" className="i-link" target="__blank">
                                <GithubOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                        border: darkMode
                                            ? '1px solid var(--primary-500)'
                                            : '1px solid var(--second-600)',
                                    }}
                                />
                            </a>
                        </div>
                        <h3
                            className="footer__text textSubTitle"
                            style={{
                                color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                            }}
                        >
                            {t('footer.footerText')}
                        </h3>
                    </div>
                    <h3
                        className="footer-textGmail textSubTitle"
                        style={{
                            color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                        }}
                    >
                        anhlamot55@gmail.com
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;
