import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

//icon
import { PlusCircleOutlined } from '@ant-design/icons';

const Card = (props) => {
    const { toggleModal, category, title, img, id, selectedPortfolio } = props;

    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const color = darkMode ? root.getPropertyValue('--primary-500') : root.getPropertyValue('--second-600');

    const handleSelectedPortfolio = () => {
        selectedPortfolio(id);
        toggleModal();
    };

    return (
        <React.Fragment>
            <div className="modal-box" onClick={handleSelectedPortfolio}>
                <div className="modal-img">
                    <img src={img} alt={title} />
                </div>
                <div className="modal-category">
                    <span
                        className="modal-titleText"
                        style={{
                            color: color.trim(),
                        }}
                    >
                        {category}
                    </span>
                    <a href="#popup" className="modal-arrow" onClick={toggleModal}>
                        <PlusCircleOutlined
                            style={{
                                fontSize: '20px',
                                color: color.trim(),
                            }}
                        />{' '}
                    </a>
                </div>
                <div className="modal-heading2 textSubTitle">{title}</div>
            </div>
        </React.Fragment>
    );
};

export default Card;
