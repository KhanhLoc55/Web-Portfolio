import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/context';
import './resume.scss';
import { useTranslation } from 'react-i18next';

//img
import GoogleUxDesign from '../../assets/resume/GoogleUxDesign.pdf';
import MetaFrontEnd from '../../assets/resume/MetaFrontEnd.pdf';

//icon
// import { PhoneOutlined, MessageOutlined, BehanceOutlined, GithubOutlined, IdcardOutlined } from '@ant-design/icons';

const Resume = () => {
    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const color = darkMode ? root.getPropertyValue('--primary-500') : root.getPropertyValue('--second-600');

    const { t } = useTranslation(); // Sử dụng hook useTranslation để lấy các hàm và biến liên quan đến việc dịch ngôn ngữ
    return (
        <section id="resume" className="resume">
            <div className="container">
                <h2 className="resume-heading textHeading">Resume</h2>
                <div className="resume-content">
                    <div className="resume-left">
                        {/* <h3
                                className="resume-hedding textSubHeading"
                                style={{
                                    color: color.trim(),
                                }}
                            >
                                {t('resume.textSumary')}
                            </h3> */}

                        {/* <div className="resume-circle">
                            <h4 className="text-title textTitle">{t('resume.textAboutMe')}</h4>
                            <div className="resume-desc">
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textSmallOne')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textSmallTwo')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textSmallThere')}
                                </p>
                            </div>

                            <div>
                                <p className="resume-info">
                                    <PhoneOutlined
                                        style={{
                                            paddingRight: '8px',
                                            fontSize: 'var(--fontSize16)',
                                        }}
                                    />
                                    <span
                                        className="resume-info-text"
                                        style={{
                                            color: color.trim(),
                                        }}
                                    >
                                        {' '}
                                        0839 851 729
                                    </span>
                                </p>
                                <p className="resume-info">
                                    <MessageOutlined
                                        style={{
                                            paddingRight: '8px',
                                            fontSize: 'var(--fontSize16)',
                                        }}
                                    />
                                    <span
                                        className="resume-info-text"
                                        style={{
                                            color: color.trim(),
                                        }}
                                    >
                                        {' '}
                                        anhlamot55@gmail.com
                                    </span>
                                </p>
                                <p className="resume-info">
                                    <BehanceOutlined
                                        style={{
                                            paddingRight: '8px',
                                            fontSize: 'var(--fontSize16)',
                                        }}
                                    />
                                    <span
                                        className="resume-info-text"
                                        style={{
                                            color: color.trim(),
                                        }}
                                    >
                                        {' '}
                                        <a href="https://www.behance.net/anhlamot55" target="__blank">
                                            behance.net
                                        </a>
                                    </span>
                                </p>
                                <p className="resume-info">
                                    <GithubOutlined
                                        style={{
                                            paddingRight: '8px',
                                            fontSize: 'var(--fontSize16)',
                                        }}
                                    />{' '}
                                    <span
                                        className="resume-info-text"
                                        style={{
                                            color: color.trim(),
                                        }}
                                    >
                                        {' '}
                                        <a href="https://github.com/KhanhLoc55" target="__blank">
                                            github.com
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div> */}

                        <h3
                            className="resume-hedding textSubHeading"
                            style={{
                                color: color.trim(),
                            }}
                        >
                            {t('resume.textCertifications')}
                        </h3>
                        <div className="resume-circle2">
                            <h4 className="text-title  textTitle">Google UX Design</h4>
                            <h5
                                className="text-time btn"
                                style={{
                                    backgroundColor: darkMode ? '#0E70BA' : '#24B6F2',
                                    color: darkMode ? '#fff ' : '#000',
                                }}
                            >
                                8/2021 - 2/2022
                            </h5>
                            <p>
                                <em>{t('resume.textCertificationFromCoursera')}</em>
                            </p>
                            <p className="resume-info">
                                <IdcardOutlined
                                    style={{
                                        padding: '0 8px',
                                        fontSize: 'var(--fontSize16)',
                                    }}
                                />
                                <span
                                    className="resume-info-text"
                                    style={{
                                        color: color.trim(),
                                    }}
                                >
                                    {' '}
                                    <a download="GoogleUxDesign.pdf" href={GoogleUxDesign}>
                                        Google Ux Design
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div className="resume-circle">
                            <h4 className="text-title textTitle">Meta Front-End Developer</h4>
                            <h5
                                className="text-time btn"
                                style={{
                                    backgroundColor: darkMode ? '#0E70BA' : '#24B6F2',
                                    color: darkMode ? '#fff ' : '#000',
                                }}
                            >
                                7/2022 - 1/2023
                            </h5>
                            <p>
                                <em> {t('resume.textCertificationFromCoursera')}</em>
                            </p>
                            <p className="resume-info">
                                <IdcardOutlined
                                    style={{
                                        padding: '0 8px',
                                        fontSize: 'var(--fontSize16)',
                                    }}
                                />
                                <span
                                    className="resume-info-text"
                                    style={{
                                        color: color.trim(),
                                    }}
                                >
                                    {' '}
                                    <a download="GoogleUxDesign.pdf" href={MetaFrontEnd}>
                                        Meta Front-End Developer
                                    </a>
                                </span>
                            </p>
                        </div>
                        <h3
                            className="resume-hedding textSubHeading"
                            style={{
                                color: color.trim(),
                            }}
                        >
                            {t('resume.textEducation')}
                        </h3>
                        <div className="resume-circle">
                            <h4 className="text-title textTitle">{t('resume.textEducation1')}</h4>
                            <h5
                                className="text-time btn"
                                style={{
                                    backgroundColor: darkMode ? '#0E70BA' : '#24B6F2',
                                    color: darkMode ? '#fff ' : '#000',
                                }}
                            >
                                2016 - 2019
                            </h5>
                            <div className="resume-desc">
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textEducation2')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textEducation3')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="resume-right">
                        <h3
                            className="resume-hedding textSubHeading"
                            style={{
                                color: color.trim(),
                            }}
                        >
                            {t('resume.textExperience')}
                        </h3>
                        <div className="resume-circle2">
                            <h4 className="text-title textTitle">Freelancer</h4>
                            <h5
                                className="text-time btn"
                                style={{
                                    backgroundColor: darkMode ? '#0E70BA' : '#24B6F2',
                                    color: darkMode ? '#fff ' : '#000',
                                }}
                            >
                                {' '}
                                {t('resume.textTime')}
                            </h5>
                            <div className="resume-desc">
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textTimeOne')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textTimeTwo')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textTimeThree')}
                                </p>
                            </div>
                        </div>

                        <div className="resume-circle">
                            <h4 className="text-title textTitle">CTy Tnhh Tmdv Quảng Cáo Lá Đỏ</h4>
                            <h5
                                className="text-time btn"
                                style={{
                                    backgroundColor: darkMode ? '#0E70BA' : '#24B6F2',
                                    color: darkMode ? '#fff ' : '#000',
                                }}
                            >
                                10/2019 - 12/2021
                            </h5>
                            <div className="resume-desc">
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textTime1')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textTime2')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textTime3')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {' '}
                                    {t('resume.textTime4')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textTime5')}
                                </p>
                                <p
                                    className="text-subtitle"
                                    style={{
                                        color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.60)',
                                    }}
                                >
                                    {t('resume.textTime6')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
