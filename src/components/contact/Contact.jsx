import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './contact.scss';
import { ThemeContext } from '../../utils/context';
import emailjs from '@emailjs/browser';
import { PhoneOutlined, MessageOutlined, EnvironmentOutlined } from '@ant-design/icons';

const Contact = () => {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const messageMaxLength = 1000;

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [charCount, setCharCount] = useState(messageMaxLength);

    const root = getComputedStyle(document.documentElement);
    const color = darkMode ? root.getPropertyValue('--primary-500') : root.getPropertyValue('--second-600');

    useEffect(() => {
        setCharCount(messageMaxLength - formData.message.length);
    }, [formData.message]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const encode = (data) =>
        Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message, subject } = formData;

        if (!name || !email || !message) return;

        const serviceId = 'service_lezjbyt';
        const templateId = 'template_olxpyad';
        const publicKey = 'xw0B6BEku4_Ej3Gxy';

        emailjs
            .send(
                serviceId,
                templateId,
                {
                    from_name: name,
                    from_email: email,
                    to_name: 'Web Wizard',
                    message,
                },
                publicKey,
            )
            .then(() => setFormData({ name: '', email: '', subject: '', message: '' }))
            .catch((error) => console.error('EmailJS error:', error));

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formData }),
        })
            .then(() => alert(t('contact.contactAlert')))
            .catch((error) => alert(error));
    };

    const { name, email, subject, message } = formData;

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="contact-heading textHeading">Contact</h2>
                <div className="contact-content">
                    <div className="contact-left">
                        <h3 className="textHeading">{t('contact.text1')}</h3>
                        <p style={{ color: darkMode ? 'var(--gray-60)' : 'var(--black-60)' }}>{t('contact.text2')}</p>
                        <p className="contact-info">
                            <PhoneOutlined style={{ paddingRight: 8, fontSize: 'var(--fontSize16)' }} />
                            <span className="contact-info-text" style={{ color: color.trim() }}>
                                0839 851 729
                            </span>
                        </p>
                        <p className="contact-info">
                            <MessageOutlined style={{ paddingRight: 8, fontSize: 'var(--fontSize16)' }} />
                            <span className="contact-info-text" style={{ color: color.trim() }}>
                                anhlamot55@gmail.com
                            </span>
                        </p>
                        <p className="contact-info">
                            <EnvironmentOutlined style={{ paddingRight: 8, fontSize: 'var(--fontSize16)' }} />
                            <span className="contact-info-text" style={{ color: color.trim() }}>
                                {t('contact.text3')}
                            </span>
                        </p>
                    </div>

                    <div
                        className="contact-right"
                        style={{
                            background: darkMode
                                ? 'linear-gradient(180deg, var(--colorStart) 0%, var(--colorEnd) 100%)'
                                : 'linear-gradient(180deg, var(--colorLightStart) 0%, var(--colorLightEnd) 100%)',
                            border: darkMode ? '1px solid var(--gray-30)' : '1px solid var(--black-30)',
                        }}
                    >
                        <form
                            className="contact-form"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="form-row">
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
                                    label={t('contact.emailLabel')}
                                    placeholder={t('contact.emailPlaceholder')}
                                    type="email"
                                    value={email}
                                    onChange={handleChange}
                                    darkMode={darkMode}
                                />
                            </div>
                            <InputField
                                id="subject"
                                label={t('contact.subjectLabel')}
                                placeholder={t('contact.subjectPlaceholder')}
                                value={subject}
                                onChange={handleChange}
                                darkMode={darkMode}
                            />
                            <div className={`input-container ${message ? 'focused' : ''}`}>
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    className="form-input"
                                    value={message}
                                    onChange={handleChange}
                                    maxLength={messageMaxLength}
                                    placeholder={t('contact.messagePlaceholder')}
                                    style={{
                                        color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
                                        border: darkMode ? '1px solid var(--gray-30)' : '1px solid var(--black-30)',
                                    }}
                                />
                                <label
                                    htmlFor="message"
                                    style={{
                                        color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
                                    }}
                                >
                                    {t('contact.messageLabel')}
                                </label>
                                <small className="contact-characters" style={{ color: color.trim() }}>
                                    <span>{charCount >= 0 ? charCount : 'Thank you for your message'}</span> characters
                                </small>
                            </div>
                            <button
                                type="submit"
                                className="contact-btn btn"
                                style={{
                                    background: darkMode ? 'var(--textColorDark)' : 'var(--black-60)',
                                    color: darkMode ? 'var(--textColorlight)' : 'var(--textColorDark)',
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

const InputField = ({ id, label, placeholder, value, onChange, darkMode, type = 'text' }) => (
    <div className={`input-container ${value ? 'focused' : ''}`}>
        <input
            type={type}
            id={id}
            name={id}
            required={id !== 'subject'} // Subject là optional
            className="form-input"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{
                color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
                border: darkMode ? '1px solid var(--gray-30)' : '1px solid var(--black-30)',
            }}
        />
        <label
            htmlFor={id}
            style={{
                color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
            }}
        >
            {label}
        </label>
    </div>
);

export default Contact;
