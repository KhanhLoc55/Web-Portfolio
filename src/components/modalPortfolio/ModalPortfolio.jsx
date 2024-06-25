import React, { useCallback, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modalPortfolio.scss';
import { useMediaQuery } from '@uidotdev/usehooks';
import { ThemeContext } from '../../utils/context';

//icon
import { CloseCircleOutlined, LinkOutlined } from '@ant-design/icons';

export default function ModalPortfolio(props) {
    const { toggleModal, img, title, category, desc1, desc2, desc3, link, source } = props;
    const isMobileDevice = useMediaQuery('(max-width : 426px)');

    // đổi màu darkMode
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const darkModeSrollBar = useCallback(() => {
        console.log('darkmode', darkMode);
        if (darkMode) {
            document.querySelector('body').classList.add('dark');
        } else {
            document.querySelector('body').classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        darkModeSrollBar();
    }, [darkModeSrollBar]);

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const backgroundColor = darkMode
        ? root.getPropertyValue('--backgroundDark')
        : root.getPropertyValue('--backgroundLight');
    const color = darkMode ? root.getPropertyValue('--textColorDark') : root.getPropertyValue('--textColorlight');

    return createPortal(
        <React.Fragment>
            <div
                className="modal-portfolio"
                style={{
                    background: backgroundColor.trim(),
                }}
            >
                <div className="modal-container">
                    <div className="modal-content">
                        <div className="modal-content-box">
                            {!isMobileDevice && (
                                <div className="modal-img">
                                    <img src={img} alt={title} />
                                </div>
                            )}
                            <div className="modal-text">
                                <div className="modalCloseOutlined">
                                    <CloseCircleOutlined
                                        onClick={toggleModal}
                                        alt="modalClose"
                                        className="modalClose-icon"
                                        style={{
                                            fontSize: '24px',
                                            color: darkMode ? 'var( --primary-500)' : 'var( --second-600)',
                                        }}
                                    />
                                </div>

                                <div className="modal-heading">
                                    <span
                                        style={{
                                            color: darkMode ? 'var( --primary-500)' : 'var( --second-600)',
                                        }}
                                    >
                                        {category}
                                    </span>
                                    <h1
                                        className="modal-heading-title textSubHeading"
                                        style={{
                                            color: color.trim(),
                                        }}
                                    >
                                        {title}
                                    </h1>
                                </div>

                                <div className="modal-desc">
                                    <p
                                        style={{
                                            color: darkMode ? 'var(--gray-60)' : 'var(--black-60)',
                                        }}
                                    >
                                        {desc1}
                                    </p>
                                    <p
                                        style={{
                                            color: darkMode ? 'var(--gray-60)' : 'var(--black-60)',
                                        }}
                                    >
                                        {desc2}
                                    </p>
                                    <p
                                        style={{
                                            color: darkMode ? 'var(--gray-60)' : 'var(--black-60)',
                                        }}
                                    >
                                        {desc3}
                                    </p>
                                </div>
                                <div className="modal__button ">
                                    <button
                                        className="modal__button-content btn"
                                        style={{
                                            border: darkMode
                                                ? '1px solid var(--primary-500)'
                                                : '1px solid var(--second-600)',
                                        }}
                                    >
                                        <div className="modal__button-link">
                                            <a
                                                href={source}
                                                target="__blank"
                                                style={{
                                                    color: darkMode ? 'var( --primary-500)' : 'var( --second-600)',
                                                }}
                                            >
                                                Source code
                                            </a>
                                            <LinkOutlined
                                                alt="Source code"
                                                style={{
                                                    fontSize: '16px',
                                                    color: darkMode ? 'var( --primary-500)' : 'var( --second-600)',
                                                }}
                                            />
                                        </div>
                                    </button>
                                    <button
                                        className="modal__button-content btn"
                                        style={{
                                            border: darkMode
                                                ? '1px solid var(--primary-500)'
                                                : '1px solid var(--second-600)',
                                        }}
                                    >
                                        <div className="modal__button-link">
                                            <a
                                                href={link}
                                                target="__blank"
                                                style={{
                                                    color: darkMode ? 'var( --primary-500)' : 'var( --second-600)',
                                                }}
                                            >
                                                View project
                                            </a>
                                            <LinkOutlined
                                                alt="Source code"
                                                style={{
                                                    fontSize: '16px',
                                                    color: darkMode ? 'var( --primary-500)' : 'var( --second-600)',
                                                }}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={toggleModal} className="modal-overlay"></div>
        </React.Fragment>,
        document.getElementById('modal-portfolio'),
        // this will let react-dom know that we want to render this modal outside the current React tree
    );
}
