import React, { useContext } from 'react';
import './resume.scss';
import { ThemeContext } from '../../utils/context';
import { useTranslation } from 'react-i18next';

//img
import GoogleUxDesign from '../../assets/resume/GoogleUxDesign.pdf';
import MetaFrontEnd from '../../assets/resume/MetaFrontEnd.pdf';

const Resume = () => {
    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const { t } = useTranslation(); // Sử dụng hook useTranslation để lấy các hàm và biến liên quan đến việc dịch ngôn ngữ
    return (
        <section id="resume" className="resume">
            <div className="container">
                <h2 className="resume-heading">Resume</h2>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3
                            className="resume-title"
                            style={{
                                // Chọn màu nền và màu chữ dựa vào chủ đề}
                                backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                color: darkMode ? '#36a4d3' : '#545454',
                            }}
                        >
                            {t('resume.textSumary')}
                        </h3>

                        <div className="resume-item">
                            <h4
                                className="text-title"
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                    color: darkMode ? '#e8e8e8' : '#1567a8',
                                }}
                            >
                                {t('resume.textAboutMe')}
                            </h4>
                            <div className="text-content">
                                <p className="text-small">{t('resume.textSmallOne')}</p>
                                <p className="text-small">{t('resume.textSmallTwo')}</p>
                                <p className="text-small">{t('resume.textSmallThere')}</p>
                            </div>
                            <ul>
                                <li className="resume__aboutMe-item">
                                    <span className="resume__aboutMe-text">{t('resume.textIphone')}:</span>{' '}
                                    <em className="em">0839 851 729</em>
                                </li>
                                <li className="resume__aboutMe-item">
                                    <span className="resume__aboutMe-text">Gmail:</span>{' '}
                                    <em className="em">anhlamot55@gmail.com</em>
                                </li>
                                <li className="resume__aboutMe-item">
                                    <span className="resume__aboutMe-text">{t('resume.textWebDesign')}</span>{' '}
                                    <em>
                                        <a href="https://www.behance.net/anhlamot55" target="__blank">
                                            behance.net
                                        </a>
                                    </em>
                                </li>
                                <li className="resume__aboutMe-item">
                                    <span className="resume__aboutMe-text">{t('resume.textWebFrontEnd')}</span>{' '}
                                    <em>
                                        <a href="https://github.com/KhanhLoc55" target="__blank">
                                            github.com
                                        </a>
                                    </em>
                                </li>
                            </ul>
                        </div>

                        <h3
                            className="resume-title"
                            style={{
                                // Chọn màu nền và màu chữ dựa vào chủ đề}
                                backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                color: darkMode ? '#36a4d3' : '#545454',
                            }}
                        >
                            {t('resume.textCertifications')}
                        </h3>
                        <div className="resume-item">
                            <h4
                                className="text-title"
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                    color: darkMode ? '#e8e8e8' : '#1567a8',
                                }}
                            >
                                Google UX Design
                            </h4>
                            <h5 className="text-time">8/2021 - 2/2022</h5>
                            <p>
                                <em>{t('resume.textCertificationFromCoursera')}</em>
                            </p>
                            <ul>
                                <li>
                                    {t('resume.textCertifications')}:{' '}
                                    <a download="GoogleUxDesign.pdf" href={GoogleUxDesign}>
                                        Google Ux Design
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4
                                className="text-title"
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                    color: darkMode ? '#e8e8e8' : '#1567a8',
                                }}
                            >
                                Meta Front-End Developer
                            </h4>
                            <h5 className="text-time">7/2022 - 1/2023</h5>
                            <p>
                                <em> {t('resume.textCertificationFromCoursera')}</em>
                            </p>
                            <ul>
                                <li>
                                    {t('resume.textCertifications')}:{' '}
                                    <a download="GoogleUxDesign.pdf" href={MetaFrontEnd}>
                                        Meta Front-End Developer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3
                            className="resume-title"
                            style={{
                                // Chọn màu nền và màu chữ dựa vào chủ đề}
                                backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                color: darkMode ? '#36a4d3' : '#545454',
                            }}
                        >
                            {t('resume.textExperience')}
                        </h3>
                        <div className="resume-item">
                            <h4
                                className="text-title"
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                    color: darkMode ? '#e8e8e8' : '#1567a8',
                                }}
                            >
                                Freelancer
                            </h4>
                            <h5 className="text-time"> {t('resume.textTime')}</h5>
                            <p>
                                <em>{t('resume.textTimeOne')}</em>
                            </p>
                            <p>
                                <em>{t('resume.textTimeTwo')}</em>
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4
                                className="text-title"
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                    color: darkMode ? '#e8e8e8' : '#1567a8',
                                }}
                            >
                                Công Ty Tnhh Tmdv Quảng Cáo Lá Đỏ
                            </h4>
                            <h5 className="text-time">10/2019 - 12/2021</h5>
                            <p>
                                <em>{t('resume.textTime1')}</em>
                            </p>
                            <p>
                                <em>{t('resume.textTime2')}</em>
                            </p>
                            <p>
                                <em> {t('resume.textTime3')}</em>
                            </p>
                            <p>
                                <em> {t('resume.textTime4')}</em>
                            </p>
                            <p>
                                <em> {t('resume.textTime5')}</em>
                            </p>
                            <p>
                                <em> {t('resume.textTime6')}</em>
                            </p>
                        </div>

                        <h3
                            className="resume-title"
                            style={{
                                // Chọn màu nền và màu chữ dựa vào chủ đề}
                                backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                color: darkMode ? '#36a4d3' : '#545454',
                            }}
                        >
                            {t('resume.textEducation')}
                        </h3>
                        <div className="resume-item">
                            <h4
                                className="text-title"
                                style={{
                                    // Chọn màu nền và màu chữ dựa vào chủ đề}
                                    backgroundColor: darkMode ? 'rgba(17, 21, 28, 0.50)' : '#ffffff',
                                    color: darkMode ? '#e8e8e8' : '#1567a8',
                                }}
                            >
                                {t('resume.textEducation1')}
                            </h4>
                            <h5 className="text-time">2016 - 2019</h5>
                            <p>
                                <em>{t('resume.textEducation2')}</em>
                            </p>
                            <p>
                                <em>{t('resume.textEducation3')}</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
