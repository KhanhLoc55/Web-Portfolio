import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import './contact.scss';
import { ThemeContext } from '../../utils/context';
import emailjs from '@emailjs/browser';
import Icon from '../icon/icon';

const Contact = () => {
    const { t } = useTranslation();
    const {
        state: { darkMode },
    } = useContext(ThemeContext);

    const messageMaxLength = 1000;
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [charCount, setCharCount] = useState(messageMaxLength);

    // Lấy màu dynamic theo theme
    const color = useMemo(() => {
        const root = getComputedStyle(document.documentElement);
        return darkMode ? root.getPropertyValue('--primary500') : root.getPropertyValue('--second600');
    }, [darkMode]);

    // Cập nhật số ký tự còn lại
    useEffect(() => {
        setCharCount(messageMaxLength - formData.message.length);
    }, [formData.message]);

    // Xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const btnStyle = useMemo(
        () => ({
            color: darkMode ? 'var(--white70)' : 'var(--black70)',
        }),
        [darkMode],
    );

    const formRow = useMemo(
        () => ({
            '--focusBorder': darkMode ? '1px solid var(--primary500)' : '1px solid var(--second600)',
        }),
        [darkMode],
    );

    // Encode Netlify
    const encode = (data) =>
        Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name || !email || !message) return;

        const serviceId = 'service_lezjbyt';
        const templateId = 'template_olxpyad';
        const publicKey = 'xw0B6BEku4_Ej3Gxy';

        // EmailJS
        emailjs
            .send(
                serviceId,
                templateId,
                { from_name: name, from_email: email, to_name: 'Web Wizard', message },
                publicKey,
            )
            .then(() => setFormData({ name: '', email: '', subject: '', message: '' }))
            .catch((error) => console.error('EmailJS error:', error));

        // Netlify form submit
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formData }),
        })
            .then(() => alert(t('contact.contactAlert')))
            .catch((error) => alert(error));
    };

    const { name, email, message } = formData;

    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <h2 className="contact__heading textHeading">{t('contact.contacts')}</h2>
                <div className="contact__content">
                    {/* Left */}
                    <div className="contact__left">
                        <h3 className="textSubHeading">{t('contact.text1')}</h3>
                        <p className="textSubTitle contact__sub" style={{ color: darkMode ? 'var(--white70)' : 'var(--black70)' }}>
                            {t('contact.text2')}
                        </p>
                        <div
                            className="contact__info textbody"
                            style={{ color: darkMode ? 'var(--white70)' : 'var(--black70)' }}
                        >
                            <div className="contact__info-item">
                                <Icon style={btnStyle} name="phone" className="skills__btn-icon" />
                                <p style={{ color: darkMode ? 'var(--primary500)' : 'var(--second600)' }}>
                                    0839 851 729
                                </p>
                            </div>
                            <div className="contact__info-item">
                                <Icon style={btnStyle} name="gemail" className="skills__btn-icon" />
                                <p style={{ color: darkMode ? 'var(--primary500)' : 'var(--second600)' }}>
                                    anhlamot55@gmail.com
                                </p>
                            </div>
                            <div className="contact__info-item">
                                <Icon style={btnStyle} name="map" className="skills__btn-icon" />
                                <p style={{ color: darkMode ? 'var(--primary500)' : 'var(--second600)' }}>
                                    {t('contact.text3')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div
                        className="contact__right"
                        style={{
                            background: darkMode
                                ? 'linear-gradient(180deg, var(--colorStart) 0%, var(--colorEnd) 100%)'
                                : 'linear-gradient(180deg, var(--colorLightStart) 0%, var(--colorLightEnd) 100%)',
                            border: darkMode ? '1px solid var(--white12)' : '1px solid var(--black12)',
                        }}
                    >
                        <form
                            className="contact__form"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="form__row " style={formRow}>
                                <InputField
                                    id="name"
                                    label={t('contact.nameLabel')}
                                    placeholder={t('contact.namePlaceholder')}
                                    value={name}
                                    onChange={handleChange}
                                    darkMode={darkMode}
                                />
                                <InputField
                                    id="email"
                                    type="email"
                                    label={t('contact.emailLabel')}
                                    placeholder={t('contact.emailPlaceholder')}
                                    value={email}
                                    onChange={handleChange}
                                    darkMode={darkMode}
                                />
                            </div>

                            {/* Message */}
                            <div className={`input__container ${message ? 'focused' : ''}`}>
                                <p
                                    className="form__text textsmall"
                                    style={{ color: darkMode ? 'var(--white100)' : 'var(--black85)' }}
                                >
                                    {t('contact.messageLabel')}
                                </p>
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    className="form__input"
                                    value={message}
                                    onChange={handleChange}
                                    maxLength={messageMaxLength}
                                    placeholder={t('contact.messagePlaceholder')}
                                    style={{
                                        color: darkMode ? 'var(--white100)' : 'var(--black85)',
                                        border: darkMode ? '1px solid var(--white12)' : '1px solid var(--black12)',
                                    }}
                                />
                                <small className="contact__characters textsmall" style={{ color: color.trim() }}>
                                    <span>{charCount >= 0 ? charCount : 'Thank you for your message'}</span>   {t('contact.characters')}
                                </small>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="contact__btn btn"
                                style={{
                                    background: darkMode ? 'var(--primary500)' : 'var(--second600)',
                                    color: darkMode ? 'var(--white100)' : 'var(--white100)',
                                }}
                            >
                                {t('contact.textMessage')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ==== Sub components ==== */
const InputField = ({ id, label, placeholder, value, onChange, darkMode, type = 'text' }) => (
    <div className={`input__container ${value ? 'focused' : ''}`}>
        <p className="form__text textsmall" style={{ color: darkMode ? 'var(--white100)' : 'var(--black85)' }}>
            {label}
        </p>
        <input
            type={type}
            id={id}
            name={id}
            required={id !== 'subject'} // Subject optional
            className="form__input"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{
                color: darkMode ? 'var(--white100)' : 'var(--black85)',
                border: darkMode ? '1px solid var(--white12)' : '1px solid var(--black12)',
            }}
        />
    </div>
);

export default Contact;
