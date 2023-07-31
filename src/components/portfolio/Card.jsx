import React, { useContext, useState } from 'react';
import heart from '../../assets/system-uicons_heart.svg';
import arrowRight from '../../assets/arrowRightUp.svg';
import modalClose from '../../assets/modal-close.svg';
import Sourcecode from '../../assets/Source-code.svg';
import { ThemeContext } from '../../utils/context';
import { useTranslation } from 'react-i18next';

const Card = (props) => {
    // Sử dụng hook useTranslation để lấy các hàm và biến liên quan đến việc dịch ngôn ngữ
    const { t } = useTranslation();
    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        document.body.classList.toggle('active-modal');
        console.log('Modal status:', modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    return (
        <>
            <div className="modal-box">
                <div className="modal-img">
                    <img src={props.img} alt={props.title} onClick={toggleModal} />
                </div>
                <div className="modal-category">
                    <span onClick={toggleModal}>{props.category}</span>
                    <div
                        className="totalLike"
                        style={{
                            // Chọn màu nền và màu chữ dựa vào chủ đề}
                            color: darkMode ? '#105083' : '#545454',
                            fontFamily: 'Poppins',
                        }}
                    >
                        <img className="icon-heart" alt="icon-heart" src={heart} /> {props.totalLike}
                    </div>
                </div>
                <div className="modal-title">
                    <h2
                        className="modal-heading2"
                        onClick={toggleModal}
                        style={{
                            // Chọn màu nền và màu chữ dựa vào chủ đề}
                            color: darkMode ? '#105083' : '#545454',
                        }}
                    >
                        {props.title}
                    </h2>
                    <a href="#popup" className="modal-arrow" onClick={toggleModal}>
                        <img src={arrowRight} alt="arrowRight" className="" />
                    </a>
                </div>
            </div>

            {/* Popup*/}
            {modal && (
                <div className="modal-container">
                    <div onClick={toggleModal} className="modal-overlay"></div>
                    <div className="modal-content">
                        <div className="modal-content-box">
                            <div className="modal-img">
                                <img src={props.img} alt={props.title} />
                            </div>
                            <div className="modal-text">
                                <span>{props.category}</span>
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
                                    {t(props.i18n.desc1)}
                                </p>
                                <p
                                    style={{
                                        // Chọn màu nền và màu chữ dựa vào chủ đề}
                                        color: '#545454',
                                    }}
                                >
                                    {t(props.i18n.desc2)}
                                </p>
                                <p
                                    style={{
                                        // Chọn màu nền và màu chữ dựa vào chủ đề}
                                        color: '#545454',
                                    }}
                                >
                                    {t(props.i18n.desc3)}
                                </p>
                                <div className="modal__button">
                                    <button className="modal__button-content">
                                        <div className="modal__button-link">
                                            <a href={props.source} target="__blank">
                                                Source code
                                            </a>
                                            <img src={Sourcecode} alt="Sourcecode" />
                                        </div>
                                    </button>
                                    <button className="modal__button-content">
                                        <div className="modal__button-link">
                                            <a href={props.link} target="__blank">
                                                View project
                                            </a>
                                            <img src={Sourcecode} alt="Sourcecode" />
                                        </div>
                                    </button>
                                </div>
                                <button className="btn" onClick={toggleModal}>
                                    <img src={modalClose} alt="modalClose" className="modalClose-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
