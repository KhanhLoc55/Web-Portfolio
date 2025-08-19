import './portfolioList.scss';
import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

const PortfolioList = ({ id, title, active, setSelected }) => {
    const {
        state: { darkMode },
    } = useContext(ThemeContext);

    return (
        <li
            className={`portfolioList ${active ? 'active' : ''}`}
            onClick={() => setSelected(id)}
            style={active ? { border: darkMode ? '1px solid var(--primary500)' : '1px solid var(--second600)' } : {}}
        >
            {title}
        </li>
    );
};

export default PortfolioList;
