import { createContext, useState } from 'react';
export const ModalContext = createContext();

export const ModalCtxProvider = (props) => {
    const { children } = props;
    const [isToggleModal, setIsToggleModal] = useState(false);
    const toggleModal = () => {
        setIsToggleModal(!isToggleModal);
    };

    return <ModalContext.Provider value={{ isToggleModal, toggleModal }}>{children}</ModalContext.Provider>;
};
