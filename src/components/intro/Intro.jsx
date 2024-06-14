import React, { useCallback, useEffect, useState } from 'react';
import './intro.scss';
import { useTypewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';

//img
import Avatar from '../../assets/avatarB.png';
import WavingHand from '../../assets/wavingHand.svg';
import iconBe from '../../assets/iconBe.svg';
import iconGithub from '../../assets/iconGithub.svg';
import iconDribble from '../../assets/dribble.svg';
import iconLinkedin from '../../assets/iconLinkedin.svg';
import iconFacebook from '../../assets/Facebook.svg';
import cvEn from '../../assets/Resume - KHANH LOC(en).pdf';
import cvVi from '../../assets/Resume - KHANH LOC(vi).pdf';

const Intro = () => {
    const [cv, setCv] = useState(null);
    const { t, i18n } = useTranslation(); // Sử dụng hook useTranslation để lấy các hàm và biến liên quan đến việc dịch ngôn ngữ

    // Sử dụng hook useTypewriter để tạo hiệu ứng chữ viết máy
    const [text] = useTypewriter({
        words: ['Brand Designer.', 'Web Designer.', 'UI Designer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    const handleChangeCvLanguage = useCallback(() => {
        if (i18n.resolvedLanguage === 'en') {
            setCv(cvEn);
        }
        if (i18n.resolvedLanguage === 'vi') {
            setCv(cvVi);
        }
    }, [i18n.resolvedLanguage]);

    useEffect(() => {
        handleChangeCvLanguage();
    }, [handleChangeCvLanguage, i18n.resolvedLanguage]);

    const handleChangeCvLanguage = useCallback(() => {
        if (i18n.resolvedLanguage === 'en') {
            setCv(cvEn);
        }
        if (i18n.resolvedLanguage === 'vi') {
            setCv(cvVi);
        }
    }, [i18n.resolvedLanguage]);

    useEffect(() => {
        handleChangeCvLanguage();
    }, [handleChangeCvLanguage, i18n.resolvedLanguage]);

    return (
        <div className="intro" id="intro">
            <div className="container">
                {/* Phần tử bên trái của "container" có className "i-left" */}
                <div className="i-left">
                    <div className="wrapperLeft">
                        <div className="textContentLeft noScroll">
                            <span className="texTitle">{t('intro.textHey')}!</span>

                            <img src={WavingHand} alt="WavingHand" className="wavingHand" />
                            <span className="texTitle"> {t('intro.texMyNameIs')}</span>
                        </div>

                        <h1 className="i-heading1">NGUYỄN KHÁNH LỘC</h1>
                        <h3 className="i-heading3">
                            {t('intro.textImAWeb')}
                            <span className="i-text-smail">{text}</span>
                        </h3>
                        <div className="i-sci">
                            <div className="i-backgroupdS">
                                <a href="https://www.behance.net/anhlamot55" target="__blank" className="i-link">
                                    <img src={iconBe} alt="Behance" className="i__icon-img" />
                                </a>
                            </div>
                            <div className="i-backgroupdS">
                                <a href="https://dribbble.com/KhanhLoc" target="__blank" className="i-link">
                                    <img src={iconDribble} alt="Dribble" className="i__icon-img" />
                                </a>
                            </div>
                            <div className="i-backgroupdS">
                                <a
                                    href="https://www.linkedin.com/in/loc-nguyenkhanh-927b0822a/"
                                    target="__blank"
                                    className="i-link"
                                >
                                    <img src={iconLinkedin} alt="Linkedin" className="i__icon-img" />
                                </a>
                            </div>
                            <div className="i-backgroupdS">
                                <a
                                    href="https://www.facebook.com/NhiLove.kha.14473"
                                    target="__blank"
                                    className="i-link"
                                >
                                    <img src={iconFacebook} alt="facebook" className="i__icon-img" />
                                </a>
                            </div>
                            <div className="i-backgroupdS">
                                <a href="https://github.com/KhanhLoc55" className="i-link" target="__blank">
                                    <img src={iconGithub} alt="Github" className="i__icon-img" />
                                </a>
                            </div>
                        </div>
                        <div className="cv">
                            <button className="btn">
                                <a download="Resume-KHANH LOC.pdf" href={cv} className="btn-text">
                                    Download cv
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Phần tử bên trái của "container" có className "i-right" */}
                <div className="i-right">
                    <img src={Avatar} alt="imgAvatar" className="imgAvatar" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
