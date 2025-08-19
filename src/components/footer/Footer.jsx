import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

import './footer.scss';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-scroll';

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

                    <Link to="header" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                        <div className="footer-align">
                            <div className="footer-icon"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
