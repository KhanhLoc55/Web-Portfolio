import './skill.scss';
import React, { useContext, useEffect, useMemo, useState } from 'react';

//icon
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../utils/context';

// ⬅️ import file CV (bạn tự thay đúng path cho file pdf)
import cvVi from '../../assets/resume/GoogleUxDesign.pdf';

import cvEn from '../../assets/resume/MetaFrontEnd.pdf';
import Icon from '../icon/icon';

const Skill = () => {
    // Sử dụng react-i18next để dễ dàng dịch nội dung
    const { t, i18n } = useTranslation();

    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const btnStyle = useMemo(
        () => ({
            border: darkMode ? '1px solid var(--primary500)' : '1px solid var(--second600)',
            color: darkMode ? 'var(--primary500)' : 'var(--second600)',
            '--hoverBg': darkMode ? 'var(--second300)' : 'var(--primary300)',
            '--hoverColor': darkMode ? 'var(--white100)' : 'var(--black85)',
        }),
        [darkMode],
    );

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const color = darkMode ? root.getPropertyValue('--primary500') : root.getPropertyValue('--second600');

    // // ⬅️ CV hiện tại theo ngôn ngữ
    const [cv, setCv] = useState(i18n.resolvedLanguage === 'vi' ? cvVi : cvEn);

    // ⬇️ Cập nhật file CV khi thay đổi ngôn ngữ
    useEffect(() => {
        setCv(i18n.resolvedLanguage === 'vi' ? cvVi : cvEn);
    }, [i18n.resolvedLanguage]);

    // Sử dụng useEffect để cập nhật thanh tiến độ khi cuộn trang
    useEffect(() => {
        // Hàm cập nhật chiều rộng của các thanh tiến độ
        const updateProgressBars = () => {
            const progressBars = document.querySelectorAll('.progress .progress-bar');
            progressBars.forEach((progressBar) => {
                progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
            });
        };
        // Cập nhật ban đầu các thanh tiến độ
        updateProgressBars();
        // Thêm lắng nghe sự kiện để cập nhật thanh tiến độ khi cuộn trang
        const handleScroll = () => {
            updateProgressBars();
        };
        window.addEventListener('scroll', handleScroll);
        // Dọn dẹp lắng nghe sự kiện khi component bị gỡ bỏ
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="skill" className="skills">
            <div className="skills__container">
                <h2 className="skills__heading textHeading">{t('skill.skills')}</h2>
                <div className="skills__content">
                    <div className="skills__left">
                        <h2 className="textSubHeading">{t('skill.textSkillMe')}</h2>
                        <p
                            className="textbody"
                            style={{
                                color: darkMode ? 'var(--white70)' : 'var(--black70)',
                            }}
                        >
                            {t('skill.textSkillTitle')}
                        </p>
                        <div className="skills__cv" style={btnStyle}>
                            <a download="Resume-KHANH LOC.pdf" href={cv} className="skills__btn-text textSubTitle">
                                {t('skill.ViewCV')}
                                <Icon name="upload" className="skills__btn-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="skills__right">
                        <div className="skills__category">
                            <div className="skills__list">
                                {' '}
                                <ul className="skills__items">
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            1.
                                        </span>{' '}
                                        Ux Research
                                    </li>
                                    <li>
                                        {' '}
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            2.
                                        </span>{' '}
                                        Wireframe
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            3.
                                        </span>{' '}
                                        Prototype
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            4.
                                        </span>{' '}
                                        User Interface
                                    </li>
                                </ul>
                                <ul className="skills__items">
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            5.
                                        </span>{' '}
                                        Landing Page
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            6.
                                        </span>{' '}
                                        Branding
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            7.
                                        </span>{' '}
                                        Web Design
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            8.
                                        </span>{' '}
                                        Mobile Design
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="skills__category">
                            <div className="skills__list">
                                <ul className="skills__items">
                                    <li>
                                        {' '}
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            1.
                                        </span>{' '}
                                        Html & Css
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            2.
                                        </span>{' '}
                                        Basic Javascript
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            3.
                                        </span>{' '}
                                        Figma
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            4.
                                        </span>{' '}
                                        Photoshop
                                    </li>
                                </ul>
                                <ul className="skills__items">
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            5.
                                        </span>{' '}
                                        Canva
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            6.
                                        </span>{' '}
                                        Illustrator
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            7.
                                        </span>{' '}
                                        Chat Gpt
                                    </li>
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            8.
                                        </span>{' '}
                                        Adobe Xd
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
