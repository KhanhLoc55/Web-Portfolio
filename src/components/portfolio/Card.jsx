import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

const Card = (props) => {
    const { toggleModal, category, title, img, id, selectedPortfolio } = props;

    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const color = darkMode ? root.getPropertyValue('--primary500') : root.getPropertyValue('--second600');

    const handleSelectedPortfolio = () => {
        selectedPortfolio(id);
        toggleModal();
    };

    return (
        <React.Fragment>
            <div
                className="modal__box"
                onClick={handleSelectedPortfolio}
                style={{ border: darkMode ? '1px solid var(--primary500)' : '1px solid var(--second600)' }}
            >
                <div className="modal__img">
                    <img src={img} alt={title} />
                </div>
                <div className="modal__category">
                    <span
                        className="modal__titleText textsmall"
                        style={{
                            color: color.trim(),
                        }}
                    >
                        {category}
                    </span>
                </div>
                <div className="modal__heading2 textSubTitle">{title}</div>
            </div>
        </React.Fragment>
    );
};

export default Card;
