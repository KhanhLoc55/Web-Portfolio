import './intro.scss';
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../utils/context';

// Image imports
import Avatar from '../../assets/avatarB.png';
import WavingHand from '../../assets/wavingHand.svg';
import cvEn from '../../assets/Resume - KHANH LOC(en).pdf';
import cvVi from '../../assets/Resume - KHANH LOC(vi).pdf';

// Icon import
import { DownloadOutlined } from '@ant-design/icons';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Intro = () => {
    const { t, i18n } = useTranslation(); // Hook for translation

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode; // Get the current theme mode

    // Use the useTypewriter hook to create typewriter effect
    const [text] = useTypewriter({
        words: ['Brand Designer.', 'Web Designer.', 'UI Designer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    const [cv, setCv] = useState(cvEn); // Initial CV state set to English CV

    // Update CV link based on selected language
    const handleChangeCvLanguage = useCallback(() => {
        setCv(i18n.resolvedLanguage === 'vi' ? cvVi : cvEn);
    }, [i18n.resolvedLanguage]);

    useEffect(() => {
        handleChangeCvLanguage();
    }, [handleChangeCvLanguage]);

    return (
        <div className="intro" id="intro">
            <div className="container">
                <div className="i-left">
                    <ScrollReveal position="left">
                        <div className="textContentLeft noScroll">
                            <span className="texTitle">{t('intro.textHey')}!</span>
                            <img src={WavingHand} alt="WavingHand" className="wavingHand" />
                            <span className="texTitle">{t('intro.texMyNameIs')}</span>
                        </div>
                        <h1 className="i-heading1 textHeading">NGUYỄN KHÁNH LỘC</h1>
                        <h3 className="i-heading3 textSubHeading">
                            {t('intro.textImAWeb')}
                            <span className="i-text-smail textSubHeading">{text}</span>
                        </h3>
                    </ScrollReveal>

                    <p
                        className="i-heading4 textbody"
                        style={{
                            color: darkMode ? 'var(--gray-60)' : 'var(--black-60)',
                        }}
                    >
                        {t('intro.IntroTextContent')}
                    </p>

                    <ScrollReveal position="left">
                        <div className="cv">
                            <button
                                className="btn"
                                style={{
                                    border: darkMode ? '1px solid var(--primary-500)' : '1px solid var(--second-600)',
                                }}
                            >
                                <a download="Resume-KHANH LOC.pdf" href={cv} className="btn-text">
                                    Download CV
                                </a>
                                <DownloadOutlined
                                    style={{
                                        fontSize: '18px',
                                        color: 'var(--white)',
                                        marginLeft: '8px',
                                    }}
                                />
                            </button>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal position="right">
                    <div className="i-right">
                        <img src={Avatar} alt="imgAvatar" className="imgAvatar" />
                        <svg fill="transparent" viewBox="0 0 506 506" width="60%" height="60%" className="circleImage">
                            <motion.circle
                                cx="253"
                                cy="253"
                                r="250"
                                stroke="#24B6F2"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ strokeDasharray: '24 10 0 0' }}
                                animate={{
                                    strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                            />
                        </svg>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Intro;
