import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalCtxProvider = ({ children }) => {
    const [isToggleModal, setIsToggleModal] = useState(false);

    const toggleModal = () => {
        setIsToggleModal((prevState) => !prevState);
    };

    const modalContextValue = {
        isToggleModal,
        toggleModal,
    };

    return <ModalContext.Provider value={modalContextValue}>{children}</ModalContext.Provider>;
};
