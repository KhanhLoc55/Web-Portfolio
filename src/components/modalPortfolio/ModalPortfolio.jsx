import React, { useContext, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './modalPortfolio.scss';
import { useMediaQuery } from '@uidotdev/usehooks';
import { ThemeContext } from '../../utils/context';
import Icon from '../../components/icon/icon';
import { useTranslation } from 'react-i18next';

export default function ModalPortfolio(props) {
    const { toggleModal, img, title, category, desc1, desc2, desc3, link, source } = props;
    const isMobileDevice = useMediaQuery('(max-width : 426px)');
    const { t } = useTranslation();

    const {
        state: { darkMode },
    } = useContext(ThemeContext);

    const themeColors = useMemo(() => {
        const root = getComputedStyle(document.documentElement);
        return {
            background: darkMode
                ? root.getPropertyValue('--backgroundDark').trim()
                : root.getPropertyValue('--backgroundLight').trim(),
            text: darkMode
                ? root.getPropertyValue('--textColorDark').trim()
                : root.getPropertyValue('--textColorlight').trim(),
            category: darkMode ? 'var(--primary500)' : 'var(--second600)',
            desc: darkMode ? 'var(--white70)' : 'var(--black70)',
            border: darkMode ? '1px solid var(--primary500)' : '1px solid var(--second600)',
            icon: darkMode ? 'var(--primary500)' : 'var(--second600)',
        };
    }, [darkMode]);

    return createPortal(
        <>
            <div className="ModalPortfolio" style={{ background: themeColors.background }}>
                <div className="ModalPortfolio__container">
                    {!isMobileDevice && (
                        <div className="ModalPortfolio__img">
                            <img src={img} alt={title} />
                        </div>
                    )}

                    <div className="ModalPortfolio__text">
                        <div className="ModalPortfolio__close">
                            <Icon
                                name="close"
                                onClick={toggleModal}
                                className="ModalPortfolio__close-icon"
                                style={{ fontSize: '24px', color: themeColors.icon }}
                            />{' '}
                        </div>

                        <div className="ModalPortfolio__content">
                            <span className="textsmall" style={{ color: themeColors.category }}>
                                {category}
                            </span>
                            <h1
                                className="ModalPortfolio__heading-title textSubHeading"
                                style={{ color: themeColors.text }}
                            >
                                {title}
                            </h1>
                            <div
                                className="ModalPortfolio__desc textbody"
                                style={{
                                    scrollbarColor: `${themeColors.icon} transparent`, // Firefox
                                }}
                            >
                                <p style={{ color: themeColors.desc}}>{desc1}</p>
                                <p style={{ color: themeColors.desc }}>{desc2}</p>
                                <p style={{ color: themeColors.desc }}>{desc3}</p>
                            </div>
                        </div>

                        <div className="ModalPortfolio__button">
                            <a
                                href={source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ModalPortfolio__button-content btn"
                                style={{
                                    color: themeColors.icon,
                                    border: themeColors.border,
                                    '--hoverBtnBg': darkMode ? 'var(--second300)' : 'var(--primary300)',
                                    '--hoverBtnColor': darkMode ? 'var(--white100)' : 'var(--black85)',
                                }}
                            >
                                <span>{t('ModalPortfolio.ModalPortfolioBtn1')}</span>
                            </a>

                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ModalPortfolio__button-content btn"
                                style={{
                                    border: themeColors.border,
                                    color: themeColors.icon,
                                    '--hoverBtnBg': darkMode ? 'var(--second300)' : 'var(--primary300)',
                                    '--hoverBtnColor': darkMode ? 'var(--white100)' : 'var(--black85)',
                                }}
                            >
                                <span>{t('ModalPortfolio.ModalPortfolioBtn2')}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={toggleModal} className="ModalPortfolio__overlay"></div>
        </>,
        document.getElementById('modal-portfolio'),
    );
}
