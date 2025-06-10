import React, { createContext, useReducer, useEffect } from 'react';

export const ThemeContext = createContext();

const getInitialTheme = () => {
    // Kiểm tra localStorage chỉ khi chạy client (tránh lỗi SSR)
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('darkmode');
        if (stored === 'true') return { darkMode: true };
        if (stored === 'false') return { darkMode: false };
    }
    return { darkMode: true }; // Mặc định là dark mode nếu chưa lưu gì hoặc không có localStorage
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, darkMode: !state.darkMode };
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }) => {
    // Khởi tạo state động với hàm lazy init (tránh gọi localStorage nhiều lần)
    const [state, dispatch] = useReducer(themeReducer, undefined, getInitialTheme);

    // Đồng bộ localStorage khi darkMode thay đổi
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('darkmode', state.darkMode.toString());
        }
    }, [state.darkMode]);

    return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};
