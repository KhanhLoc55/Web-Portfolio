import './skill.scss';
import React, { useContext, useEffect } from 'react';

//icon
import {
    BehanceOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    DribbbleOutlined,
    GithubOutlined,
} from '@ant-design/icons';

import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../utils/context';

const Skill = () => {
    // Sử dụng react-i18next để dễ dàng dịch nội dung
    const { t } = useTranslation();

    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const color = darkMode ? root.getPropertyValue('--primary-500') : root.getPropertyValue('--second-600');

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
        <section id="skill" className="skills section-bg">
            <div className="container">
                <h2 className="skills-heading textHeading ">Skills</h2>
                <div className="skills-content">
                    <div className="skills-left ScrollReveal-left">
                        <h2 className="textHeading ">Kỹ năng của tôi</h2>
                        <p
                            className="textSubTitle top-header"
                            style={{
                                color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                            }}
                        >
                            xem đầy đủ những kỹ năng tôi có và thực hiện, để phát triển dự án cho bạn
                        </p>
                        <div className="skills-icon">
                            <a href="https://www.behance.net/anhlamot55" target="_blank" rel="noopener noreferrer">
                                <BehanceOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                    }}
                                />
                            </a>
                            <a href="https://dribbble.com/KhanhLoc" target="__blank" className="i-link">
                                <LinkedinOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                    }}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/loc-nguyenkhanh-927b0822a/"
                                target="__blank"
                                className="i-link"
                            >
                                <DribbbleOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                    }}
                                />
                            </a>
                            <a href="https://www.facebook.com/NhiLove.kha.14473" target="__blank" className="i-link">
                                <FacebookOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                    }}
                                />
                            </a>
                            <a href="https://github.com/KhanhLoc55" className="i-link" target="__blank">
                                <GithubOutlined
                                    className="icon-btn"
                                    style={{
                                        color: color.trim(),
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="skills-right ScrollReveal-right">
                        <div className="skills-category">
                            <h3 className="textSubHeading">{t('skill.textSkill')}</h3>
                            <div className="skills-list">
                                {' '}
                                <ul className="skills-items">
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
                                <ul className="skills-items">
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            5.
                                        </span>{' '}
                                        Landing page
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
                                        Web design
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
                                        Mobile design
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="skills-category">
                            <h3 className="textSubHeading">{t('skill.textTool')}</h3>
                            <div className="skills-list">
                                <ul className="skills-items">
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
                                <ul className="skills-items">
                                    <li>
                                        <span
                                            style={{
                                                color: color.trim(),
                                                fontWeight: 'var(--fontWeightBold)',
                                            }}
                                        >
                                            5.
                                        </span>{' '}
                                        Photoshop
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
                                        Chat gpt
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
                                        Adobe xd
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
