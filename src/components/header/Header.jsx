import React, { useContext, useEffect, useMemo, useState } from 'react';
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
    const {
        state: { darkMode },
    } = useContext(ThemeContext);

    const [scrollProgress, setScrollProgress] = useState(0);
    const [showBoxShadow, setShowBoxShadow] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
                    setScrollProgress(progress);
                    setShowBoxShadow(scrollTop > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { backgroundColor, textColor, activeColor } = useMemo(() => {
        const style = getComputedStyle(document.documentElement);
        return {
            backgroundColor: darkMode
                ? style.getPropertyValue('--backgroundDark')
                : style.getPropertyValue('--backgroundLight'),
            textColor: darkMode
                ? style.getPropertyValue('--textColorDark')
                : style.getPropertyValue('--textColorlight'),
            activeColor: darkMode ? style.getPropertyValue('--primary-500') : style.getPropertyValue('--second-600'),
        };
    }, [darkMode]);

    const headerStyle = {
        backgroundColor: backgroundColor.trim(),
        color: textColor.trim(),
        boxShadow: showBoxShadow ? '0 5px 15px rgba(0,0,0,.1)' : 'none',
        transition: 'box-shadow 0.3s ease-in-out',
        '--activeColor': activeColor.trim(),
    };

    const currentLogo = darkMode ? LogoImgWhite : LogoImg;

    const navLinks = [
        { id: 'portfolio', label: t('header.headerProject') },
        { id: 'skill', label: t('header.headerSkill') },
        { id: 'resume', label: t('header.headerResume') },
        { id: 'contact', label: t('header.headerContact') },
    ];

    return (
        <header className="header" id="header">
            <div className="container" style={headerStyle}>
                <img
                    className="header__logo-img"
                    alt="logo"
                    src={currentLogo}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />

                <div className="header__wrapper">
                    <div className="header-left">
                        <ul className="header-item">
                            {navLinks.map(({ id, label }) => (
                                <li className="header-text" key={id}>
                                    <Link to={id} activeClass="active" spy smooth offset={-135} duration={500}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="header-right">
                        <Toggle />
                        <Language />
                    </div>
                </div>

                <div className="scroll-progress-bar" style={{ transform: `scaleX(${scrollProgress})` }} />
            </div>
        </header>
    );
};

export default Header;
