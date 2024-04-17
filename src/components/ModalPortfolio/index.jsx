import React from 'react';
import { createPortal } from 'react-dom';
import './index.scss';
export default function ModalPortfolio(props) {
    const { toggleModal, closeBtn, img, title, category, darkMode, desc1, desc2, desc3, sourceCode, link, source } =
        props;
    return createPortal(
        <div className="active-modal">
            <div className="modal-container">
                <div onClick={toggleModal} className="modal-overlay"></div>
                <div className="modal-content">
                    <div className="modal-content-box">
                        <div className="modal-img">
                            <img src={img} alt={title} />
                        </div>
                        <div className="modal-text">
                            <span>{category}</span>
                            <h1
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    color: darkMode ? '#105083' : '#545454',
                                }}
                            >
                                {props.title}
                            </h1>
                            <p
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    color: '#545454',
                                }}
                            >
                                {desc1}
                            </p>
                            <p
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    color: '#545454',
                                }}
                            >
                                {desc2}
                            </p>
                            <p
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    color: '#545454',
                                }}
                            >
                                {desc3}
                            </p>
                            <div className="modal__button">
                                <button className="modal__button-content">
                                    <div className="modal__button-link">
                                        <a href={source} target="__blank">
                                            Source code
                                        </a>
                                        <img src={sourceCode} alt="Sourcecode" />
                                    </div>
                                </button>
                                <button className="modal__button-content">
                                    <div className="modal__button-link">
                                        <a href={link} target="__blank">
                                            View project
                                        </a>
                                        <img src={sourceCode} alt="Sourcecode" />
                                    </div>
                                </button>
                            </div>
                            <button className="btn" onClick={toggleModal}>
                                <img src={closeBtn} alt="modalClose" className="modalClose-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal'), // this will let react-dom know that we want to render this modal outside the current React tree
    );
}
