import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

import { allPortfolio, frontEndPortfolio, brandDesignerPortfolio, uiDesignerPortfolio } from './data.js';
import Card from './Card';

export default function Portfolio() {
    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);
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
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
