import { useContext, useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

import { allPortfolio, frontEndPortfolio, brandDesignerPortfolio, uiDesignerPortfolio } from './data.js';
import Card from './Card';
import ModalPortfolio from '../ModalPortfolio/index.jsx';
import { ModalContext } from '../../context/modalCtx/index.jsx';
import { useTranslation } from 'react-i18next';
import modalClose from '../../assets/modal-close.svg';

export default function Portfolio() {
    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);
    const [isSelectPortfolio, setIsPortfolio] = useState({});
    const modalCtx = useContext(ModalContext);
    console.log(modalCtx.isToggleModal);
    // Sử dụng hook useTranslation để lấy các hàm và biến liên quan đến việc dịch ngôn ngữ
    const { t } = useTranslation();
    const list = [
        {
            id: 'All',
            title: 'All',
        },
        {
            id: 'Web App',
            title: 'Web App',
        },
        {
            id: 'Mobile App',
            title: 'Mobile App',
        },
        {
            id: 'Brand Designer',
            title: 'Brand Designer',
        },
    ];

    useEffect(() => {
        switch (selected) {
            case 'All':
                setData(allPortfolio);
                break;
            case 'Web App':
                setData(frontEndPortfolio);
                break;
            case 'Mobile App':
                setData(uiDesignerPortfolio);
                break;
            case 'Brand Designer':
                setData(brandDesignerPortfolio);
                break;
            default:
                setData(allPortfolio);
        }
    }, [selected]);

    const toggleModal = () => {
        modalCtx.toggleModal();
    };

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="portfolio-title">
                    <h2 className="portfolio-heading">Portfolio</h2>
                </div>
                <ul className="portfolio-list">
                    {list.map((item) => (
                        <PortfolioList
                            key={item.id}
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    ))}
                </ul>

                <div className="portfolio-box">
                    {data.map((value, index) => {
                        return (
                            <Card
                                key={index}
                                img={value.img}
                                category={value.category}
                                totalLike={value.totalLike}
                                title={value.title}
                                i18n={{
                                    desc1: value.i18n.desc1,
                                    desc2: value.i18n.desc2,
                                    desc3: value.i18n.desc3,
                                }}
                                link={value.link}
                                source={value.source}
                                toggleModal={toggleModal}
                            />
                        );
                    })}
                </div>
            </div>
            {/* Popup*/}
            {/* {modal && (
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
            )} */}
            {modalCtx.isToggleModal && (
                <ModalPortfolio
                    toggleModal={toggleModal}
                    closeBtn={modalClose}
                    // img={props.img}
                    // title={props.title}
                    // category={props.category}
                />
            )}
        </section>
    );
}
