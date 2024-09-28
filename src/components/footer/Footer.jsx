import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

import './footer.scss';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-scroll';

import {
    BehanceOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    DribbbleOutlined,
    GithubOutlined,
    UpCircleOutlined,
} from '@ant-design/icons';
const Footer = () => {
    // Sử dụng react-i18next để dễ dàng dịch nội dung
    const { t } = useTranslation();

    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const color = darkMode ? root.getPropertyValue('--primary-500') : root.getPropertyValue('--second-600');

    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="footer-line"></div>
                <div className="footer-content">
                    <h3
                        className="footer-textGmail textSubTitle"
                        style={{
                            color: darkMode ? 'var(--gray-60)' : 'var(--black-60)',
                        }}
                    >
                        anhlamot55@gmail.com
                    </h3>
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
                                color: darkMode ? 'var(--gray-60)' : 'var(--black-60)',
                            }}
                        >
                            {t('footer.footerText')}
                        </h3>
                    </div>

                    <Link to="header" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                        <div className="footer-align">
                            <div className="footer-icon">
                                <UpCircleOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                    }}
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
