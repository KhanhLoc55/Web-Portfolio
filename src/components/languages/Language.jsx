import React, { useContext, useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../utils/context';
import './language.scss';

const Language = () => {
    // Lấy darkMode từ context global
    const {
        state: { darkMode },
    } = useContext(ThemeContext);

    // Hook dịch i18n
    const { i18n } = useTranslation();

    // Trạng thái hiển thị dropdown
    const [isOpen, setIsOpen] = useState(false);

    // Tham chiếu vùng chứa dropdown để xử lý click ngoài
    const dropdownRef = useRef(null);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Xử lý đổi ngôn ngữ
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false); // đóng dropdown sau khi chọn
    };

    // Lấy màu theo theme (dùng useMemo để tránh tính lại không cần thiết)
    const backgroundColor = darkMode ? 'var(--backgroundDark)' : 'var(--backgroundLight)';
    const textColor = darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)';
    const borderColor = darkMode ? 'var(--primary500)' : 'var(--second600)';
    const hoverBgColor = darkMode ? 'var(--second300)' : 'var(--primary300)';

    return (
        <div
            className="language"
            ref={dropdownRef}
            onClick={() => setIsOpen(true)} // ✅ Chỉ mở khi click vào container
            style={{ border: `1px solid ${borderColor}` }}
        >
            {/* Hiển thị ngôn ngữ hiện tại: VI hoặc EN */}
            <span className="language__label">{i18n.language === 'vi' ? 'VI' : 'EN'}</span>

            {/* Menu chọn ngôn ngữ */}
            {isOpen && (
                <div
                    className="language__dropdown"
                    style={{
                        backgroundColor,
                        color: textColor,
                        border: `1px solid ${borderColor}`,
                    }}
                >
                    {[
                        { code: 'en', label: 'English' },
                        { code: 'vi', label: 'Việt Nam' },
                    ].map(({ code, label }) => (
                        <div
                            key={code}
                            className="language__option"
                            style={{ '--hoverBg': hoverBgColor }}
                            onClick={(e) => {
                                e.stopPropagation(); // ⛔ Ngăn sự kiện click nổi lên container
                                handleChangeLanguage(code); // đổi ngôn ngữ + đóng menu
                            }}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Language;
