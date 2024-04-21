import React from 'react';
import { createPortal } from 'react-dom';
import './index.scss';
import modalClose from '../../assets/modal-close.svg';
import sourceCode from '../../assets/Source-code.svg';

export default function ModalPortfolio(props) {
    const { toggleModal, img, title, category, darkMode, desc1, desc2, desc3, link, source } = props;
    return createPortal(
        <React.Fragment>
            <div className="modal-portfolio">
                <div className="modal-container">
                    <div className="modal-content">
                        <div className="modal-content-box">
                            <div className="modal-img">
                                <img src={img} alt={title} />
                            </div>
                            <div className="modal-text">
                                <div className="modal-header">
                                    <span>{category}</span>
                                    <button className="btn" onClick={toggleModal}>
                                        <img src={modalClose} alt="modalClose" className="modalClose-icon" />
                                    </button>
                                </div>
                                <h1
                                    style={{
                                        // Chọn màu nền và màu chữ dựa vào chủ đề}
                                        color: darkMode ? '#105083' : '#545454',
                                    }}
                                >
                                    {title}
                                </h1>
                                <div className="modal-desc">
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
                                </div>
                                <div className="modal__button">
                                    <button className="modal__button-content">
                                        <div className="modal__button-link">
                                            <a href={source} target="__blank">
                                                Source code
                                            </a>
                                            <img src={sourceCode} alt="Source code" />
                                        </div>
                                    </button>
                                    <button className="modal__button-content">
                                        <div className="modal__button-link">
                                            <a href={link} target="__blank">
                                                View project
                                            </a>
                                            <img src={sourceCode} alt="Source code" />
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
