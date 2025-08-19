import './intro.scss';
import React, { useContext, useMemo } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../utils/context';
import Avatar from '../../assets/avatarB.png';

import ScrollReveal from '../ScrollReveal/ScrollReveal';
import Icon from '../../components/icon/icon';

const Intro = () => {
    // Hook dịch i18n
    const { t } = useTranslation();

    // Lấy darkMode từ context global
    const {
        state: { darkMode },
    } = useContext(ThemeContext);

    // ⬇️ Gõ hiệu ứng typing
    const [text] = useTypewriter({
        words: ['Brand Designer.', 'Web Designer.', 'UI/UX Designer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    // Màu stroke của vòng tròn SVG
    // const strokeColor = color;

    // Style chung cho tất cả icon mạng xã hội
    const iconStyle = useMemo(
        () => ({
            color: darkMode ? 'var(--primary500)' : 'var(--second600)',
            border: darkMode ? '1px solid var(--primary500)' : '1px solid var(--second600)',
            '--hoverIconBg': darkMode ? 'var(--second300)' : 'var(--primary300)',
            '--hoverIconColor': darkMode ? 'var(--white100)' : 'var(--black85)',
        }),
        [darkMode],
    );

    return (
        <div className="intro" id="intro">
            <div className="intro__container">
                <div className="intro__left">
                    <ScrollReveal position="left">
                        <div className="intro__intro-text-group noScroll">
                            <span className="intro__intro-text">{t('intro.textHey')}!</span>
                            <Icon name="wavingHand" className="intro__waving-hand" style={{ color: 'var(--amberr)' }} />
                            <span className="intro__intro-text">{t('intro.texMyNameIs')}</span>
                        </div>

                        <h1 className="intro__heading--xl">NGUYỄN KHÁNH LỘC</h1>

                        <h3 className="intro__heading--md">
                            {t('intro.textImAWeb')}
                            <span className="intro__typewriter">{text}</span>
                        </h3>
                    </ScrollReveal>

                    <p
                        className="intro__heading--desc"
                        style={{
                            color: darkMode ? 'var(--white70)' : 'var(--black70)',
                        }}
                    >
                        {t('intro.IntroTextContent')}
                    </p>

                    <div className="intro-icon">
                        <a
                            href="https://www.behance.net/anhlamot55"
                            className="i-link"
                            target="__blank"
                            rel="noreferrer"
                        >
                            <Icon name="behance" className="icon-btn" style={iconStyle} />
                        </a>

                        <a href="https://zalo.me/0839851729" target="_blank" className="i-link" rel="noreferrer">
                            <Icon name="zalo" className="icon-btn" style={iconStyle} />
                        </a>

                        <a
                            href="https://www.facebook.com/NhiLove.kha.14473"
                            target="__blank"
                            rel="noreferrer"
                            className="i-link"
                        >
                            <Icon name="facebook" className="icon-btn" style={iconStyle} />{' '}
                        </a>
                    </div>
                </div>

                <ScrollReveal position="right">
                    <div className="intro__right">
                        <img src={Avatar} alt="imgAvatar" className="intro__avatar" />

                        <svg
                            fill="transparent"
                            viewBox="0 0 506 506"
                            width="60%"
                            height="60%"
                            className="intro__avatar-circle"
                        >
                            <defs>
                                <linearGradient id="avatarCircleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="30%" stopColor="var(--primary300)" />
                                    <stop offset="60%" stopColor="var(--primary500)" />
                                    <stop offset="90%" stopColor="var(--second300)" />
                                </linearGradient>
                            </defs>
                            <motion.circle
                                cx="253"
                                cy="253"
                                r="250"
                                stroke="url(#avatarCircleGradient)" // 🎯 dùng gradient
                                // stroke={strokeColor} // <-- dùng biến động theo theme
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
