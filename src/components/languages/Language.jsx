import React, { useContext } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../utils/context';

const Language = () => {
    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const { i18n } = useTranslation();
    const dropdownStyles = {
        position: 'static',
    };
    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const root = getComputedStyle(document.documentElement);

    const backgroundColor = darkMode
        ? root.getPropertyValue('--backgroundDark')
        : root.getPropertyValue('--backgroundLight');
    const color = darkMode ? root.getPropertyValue('--textColorDark') : root.getPropertyValue('--textColorlight');

    return (
        <>
            <NavDropdown
                title={i18n.language === 'vi' ? 'Vi' : 'En'}
                id="collasible-nav-dropdown"
                style={dropdownStyles}
                className="language"
            >
                <NavDropdown.Item onClick={() => handleChangeLanguage('en')}>
                    <div
                        className="btn"
                        style={{
                            backgroundColor: backgroundColor.trim(),
                            color: color.trim(),
                        }}
                    >
                        English
                    </div>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleChangeLanguage('vi')}>
                    <div
                        className="btn"
                        style={{
                            backgroundColor: backgroundColor.trim(),
                            color: color.trim(),
                        }}
                    >
                        Việt nam
                    </div>
                </NavDropdown.Item>
            </NavDropdown>
        </>
    );
};

export default Language;
