import React, { useContext } from 'react';
import './toggle.scss';
import { ThemeContext } from '../../utils/context';
import Icon from '../../components/icon/icon';

const DarkModeButton = () => {
    const {
        state: { darkMode },
        dispatch,
    } = useContext(ThemeContext);

    const handleToggle = () => {
        const newMode = !darkMode;
        localStorage.setItem('darkmode', newMode.toString());
        dispatch({ type: 'TOGGLE' });
    };

    return (
        <div className="toggle" onClick={handleToggle}>
            <div className={`toggle__button ${darkMode ? 'toggle__button--dark' : ''}`}>
                <div className="toggle__circle">
                    <Icon name={darkMode ? 'moon' : 'sun'} className="toggle__icon" />
                </div>
            </div>
        </div>
    );
};

export default DarkModeButton;
