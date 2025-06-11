import React, { createContext, useReducer } from 'react';

// Tạo context để chia sẻ theme giữa các component
export const ThemeContext = createContext();

// Giá trị khởi tạo: luôn bật dark mode mặc định
const initialTheme = { darkMode: true };

// Reducer xử lý hành động thay đổi theme
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, darkMode: !state.darkMode }; // Đảo trạng thái darkMode
        default:
            return state;
    }
};

// Provider bao bọc app, cung cấp theme context cho toàn bộ ứng dụng
export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialTheme);

    return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};
