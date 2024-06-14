import { useContext, useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

import { allPortfolio, frontEndPortfolio, brandDesignerPortfolio, uiDesignerPortfolio } from './data.js';
import Card from './Card';
import ModalPortfolio from '../modalPortfolio/ModalPortfolio.jsx';
import { ModalContext } from '../../context/modalCtx/index.jsx';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const [selected, setSelected] = useState('featured');
    const [dataPortfolio, setDataPortfolio] = useState([]);
    const [isSelectPortfolio, setIsSelectedPortfolio] = useState({});
    const modalCtx = useContext(ModalContext);
    // Sử dụng hook useTranslation để lấy các hàm và biến liên quan đến việc dịch ngôn ngữ
    const { t } = useTranslation();

    // filter portfolio list
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
                setDataPortfolio(allPortfolio);
                break;
            case 'Web App':
                setDataPortfolio(frontEndPortfolio);
                break;
            case 'Mobile App':
                setDataPortfolio(uiDesignerPortfolio);
                break;
            case 'Brand Designer':
                setDataPortfolio(brandDesignerPortfolio);
                break;
            default:
                setDataPortfolio(allPortfolio);
        }
    }, [selected]);

    // open modal
    const toggleModal = () => {
        modalCtx.toggleModal();
    };

    // selected portfolio
    const selectedPortfolio = (id) => {
        const selectedPortfolio = dataPortfolio.find((item) => item.id === id);
        setIsSelectedPortfolio(selectedPortfolio);
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
                    {dataPortfolio.map((value) => {
                        return (
                            <Card
                                key={value.id}
                                id={value.id}
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
                                selectedPortfolio={() => selectedPortfolio(value.id)}
                            />
                        );
                    })}
                </div>
            </div>
            {/* Popup*/}
            {modalCtx.isToggleModal && (
                <ModalPortfolio
                    toggleModal={toggleModal}
                    img={isSelectPortfolio.img}
                    title={isSelectPortfolio.title}
                    category={isSelectPortfolio.category}
                    darkMode={modalCtx.darkMode}
                    desc1={t(isSelectPortfolio.i18n.desc1)}
                    desc2={t(isSelectPortfolio.i18n.desc2)}
                    desc3={t(isSelectPortfolio.i18n.desc3)}
                    link={isSelectPortfolio.link}
                    source={isSelectPortfolio.source}
                />
            )}
        </section>
    );
}
