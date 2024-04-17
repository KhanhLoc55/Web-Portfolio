import React, { useContext } from 'react';
import heart from '../../assets/system-uicons_heart.svg';
import arrowRight from '../../assets/arrowRightUp.svg';
import { ThemeContext } from '../../utils/context';

const Card = (props) => {
    const { toggleModal } = props;
    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default Card;
