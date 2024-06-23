import React, { createContext, useReducer } from 'react';

// Khởi tạo Context
export const ThemeContext = createContext();

// Trạng thái ban đầu của theme
const INITIAL_STATE = { darkMode: true };

// Reducer cho theme
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, darkMode: !state.darkMode }; // Cập nhật darkMode khi toggle
        default:
            return state;
    }
};

// Component cung cấp Context cho ứng dụng
export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    // Giá trị của Context
    const themeContextValue = {
        state,
        dispatch,
    };

    // Cung cấp giá trị Context cho toàn bộ ứng dụng
    return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};
