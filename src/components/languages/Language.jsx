import React, { useContext, useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../utils/context';
import './language.scss';

const Language = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const { i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    const root = getComputedStyle(document.documentElement);
    const backgroundColor = darkMode
        ? root.getPropertyValue('--backgroundDark')
        : root.getPropertyValue('--backgroundLight');
    const color = darkMode ? root.getPropertyValue('--textColorDark') : root.getPropertyValue('--textColorlight');

    return (
        <div className="language" onClick={toggleDropdown} ref={dropdownRef}>
            <span className="languageSpan">{i18n.language === 'vi' ? 'VI' : 'EN'}</span>
            {isOpen && (
                <div className="dropdown-menu show">
                    <div className="dropdown-item" onClick={() => handleChangeLanguage('en')}>
                        <div
                            className="language-btn"
                            style={{ backgroundColor: backgroundColor.trim(), color: color.trim() }}
                        >
                            English
                        </div>
                    </div>
                    <div className="dropdown-item" onClick={() => handleChangeLanguage('vi')}>
                        <div
                            className="language-btn"
                            style={{ backgroundColor: backgroundColor.trim(), color: color.trim() }}
                        >
                            Việt Nam
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Language;
