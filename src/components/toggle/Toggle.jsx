import React, { useState, useEffect, useContext } from 'react';
import './toggle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../utils/context';

const DarkModeButton = () => {
    const { state, dispatch } = useContext(ThemeContext);

    // Khởi tạo isDarkMode theo context state hoặc localStorage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkmode');
        if (saved !== null) return saved === 'true';
        return state.darkMode ?? true; // fallback true nếu chưa có state
    });

    // Đồng bộ khi state trong context thay đổi (ví dụ toggle từ chỗ khác)
    useEffect(() => {
        if (state.darkMode !== isDarkMode) {
            setIsDarkMode(state.darkMode);
            localStorage.setItem('darkmode', state.darkMode.toString());
        }
    }, [state.darkMode]);

    const handleToggle = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkmode', newMode.toString());
        dispatch({ type: 'TOGGLE' });
    };

    return (
        <div className="toggle">
            <div className={`btn${isDarkMode ? ' darkmode' : ''}`} onClick={handleToggle}>
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
