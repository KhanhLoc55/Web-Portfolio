import { useContext, useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { allPortfolio, frontEndPortfolio, brandDesignerPortfolio, uiDesignerPortfolio } from './data.js';
import Card from './Card';
import ModalPortfolio from '../modalPortfolio/ModalPortfolio.jsx';
import { ModalContext } from '../../context/modalCtx/index.jsx';
import { useTranslation } from 'react-i18next';

// 🆕 Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
    // ‼️ đổi mặc định thành “All” để khớp mảng list
    const [selected, setSelected] = useState('All');
    const [dataPortfolio, setDataPortfolio] = useState([]);
    const [isSelectPortfolio, setIsSelectedPortfolio] = useState({});
    const [direction, setDirection] = useState(0); // 🆕 lưu hướng (-1 | 1)
    const modalCtx = useContext(ModalContext);
    const { t } = useTranslation();

    // Thứ tự các tab
    const list = [
        { id: 'All', title: 'All' },
        { id: 'Web App', title: 'Web App' },
        { id: 'Mobile App', title: 'Mobile App' },
        { id: 'Brand Design', title: 'Brand Design' },
    ];

    // 🆕 hàm chọn tab có tính toán hướng
    const handleSelect = (id) => {
        const prevIdx = list.findIndex((item) => item.id === selected);
        const newIdx = list.findIndex((item) => item.id === id);
        if (newIdx === prevIdx) return; // không đổi

        // newIdx > prevIdx  → tiến tới tab bên phải → slide từ trái qua (direction = 1)
        // newIdx < prevIdx  → lùi lại tab bên trái → slide từ phải qua (direction = -1)
        setDirection(newIdx > prevIdx ? 1 : -1);
        setSelected(id);
    };

    // lọc data theo tab
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
            case 'Brand Design':
                setDataPortfolio(brandDesignerPortfolio);
                break;
            default:
                setDataPortfolio(allPortfolio);
        }
    }, [selected]);

    const toggleModal = () => modalCtx.toggleModal();

    const selectedPortfolio = (id) => {
        const found = dataPortfolio.find((item) => item.id === id);
        setIsSelectedPortfolio(found);
    };

    // 🆕 tính offset dựa trên direction
    const enterX = direction === 0 ? 0 : direction === 1 ? -50 : 50;
    const exitX = direction === 0 ? 0 : direction === 1 ? 50 : -50;

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="portfolio-heading textHeading">Portfolio</h2>

                <ul className="portfolio-list">
                    {list.map((item) => (
                        <PortfolioList
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            active={selected === item.id}
                            setSelected={handleSelect}
                        />
                    ))}
                </ul>

                {/* ⭐ Slide trái/phải theo hướng */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        className="portfolio-box"
                        initial={{ opacity: 0, x: enterX }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: exitX }}
                        transition={{ duration: 0.4 }}
                    >
                        {dataPortfolio.map((value) => (
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
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Popup */}
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
