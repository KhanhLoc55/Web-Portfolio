import React, { useContext, useEffect, useState } from 'react';
import './header.scss';
import LogoImg from '../../assets/KL-textLogo.svg';
import LogoImgWhite from '../../assets/KL-textLogowhite.svg';
import Language from '../languages/Language';
import Toggle from '../toggle/Toggle';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../utils/context';

const Header = () => {
    const { t } = useTranslation();

    // ⬇️ Lấy trạng thái darkMode từ context
    const {
        state: { darkMode },
    } = useContext(ThemeContext);

    // ⬇️ Trạng thái scroll dùng để tạo hiệu ứng progress + shadow
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showShadow, setShowShadow] = useState(false);

    // ⬇️ Lắng nghe scroll và cập nhật progress + shadow (mượt bằng requestAnimationFrame)
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

                    setScrollProgress(progress);
                    setShowShadow(scrollTop > 50); // hiện shadow khi scroll > 50px
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ⬇️ Lấy style động theo darkMode từ CSS variable
    // Lấy màu theo theme (dùng useMemo để tránh tính lại không cần thiết)
    const backgroundColor = darkMode ? 'var(--backgroundDark)' : 'var(--backgroundLight)';
    const textColor = darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)';
    const activeColor = darkMode ? 'var(--primary500)' : 'var(--second600)';

    // ⬇️ Tạo style object áp dụng cho header container
    const headerStyle = {
        backgroundColor: backgroundColor.trim(),
        color: textColor.trim(),
        boxShadow: showShadow ? '0 5px 15px rgba(0,0,0,.1)' : 'none',
        transition: 'box-shadow 0.3s ease-in-out',
        '--activeColor': activeColor.trim(), // dùng cho link đang active
    };

    // ⬇️ Logo đổi theo darkMode
    const logoSrc = darkMode ? LogoImgWhite : LogoImg;

    // ⬇️ Danh sách navigation dùng scroll-to-id
    const navLinks = [
        { id: 'portfolio', label: t('header.headerProject') },
        { id: 'skill', label: t('header.headerSkill') },
        // { id: 'resume', label: t('header.headerResume') },
        { id: 'contact', label: t('header.headerContact') },
    ];

    return (
        <header className="header" id="header">
            <div className="header__container" style={headerStyle}>
                {/* ⬇️ Logo bấm về đầu trang */}
                <img
                    className="header__logo"
                    src={logoSrc}
                    alt="logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />

                {/* ⬇️ Khối wrapper chứa nav và actions */}
                <div className="header__wrapper">
                    {/* ⬇️ Navigation links */}
                    <ul className="header__nav">
                        {navLinks.map(({ id, label }) => (
                            <li className="header__nav-item" key={id}>
                                <Link to={id} activeClass="active" spy smooth offset={-135} duration={500}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* ⬇️ Khu vực actions: toggle + language */}
                    <div className="header__actions">
                        <Toggle />
                        <Language />
                    </div>
                </div>

                {/* ⬇️ Thanh progress scroll hiển thị theo % */}
                <div className="header__progress" style={{ transform: `scaleX(${scrollProgress})` }} />
            </div>
        </header>
    );
};

export default Header;
