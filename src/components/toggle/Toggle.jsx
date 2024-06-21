import React, { useState, useEffect, useContext } from 'react';
import './toggle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../utils/context';

const DarkModeButton = () => {
    // Đặt giá trị mặc định của isDarkMode là true
    const [isDarkMode, setIsDarkMode] = useState(true);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        // Hook useEffect để xử lý một số logic khi component mount
        const darkMode = localStorage.getItem('darkmode');
        if (darkMode === 'true') {
            setIsDarkMode(true);
        }
    }, []);

    const handleDarkModeToggle = () => {
        // Xử lý khi người dùng bật/tắt chế độ dark mode
        theme.dispatch({ type: 'TOGGLE' });
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkmode', !isDarkMode);
    };

    return (
        <div className="toggle">
            <div className={`btn${isDarkMode ? ' darkmode' : ''} `} onClick={handleDarkModeToggle}>
                <div className="toggle-circle">
                    <div className="toggle__btn-icon">
                        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className="toggle-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DarkModeButton;
