import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './contact.scss';
import { ThemeContext } from '../../utils/context';
import emailjs from '@emailjs/browser';

import { PhoneOutlined, MessageOutlined, EnvironmentOutlined } from '@ant-design/icons';
const Contact = () => {
    const messageMaxLength = 1000;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(1000);

    // Sử dụng hook useTranslation để lấy các hàm và biến liên quan đến việc dịch ngôn ngữ
    const { t } = useTranslation();

    // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    // Truy cập vào root đổi màu color
    const root = getComputedStyle(document.documentElement);
    const color = darkMode ? root.getPropertyValue('--primary-500') : root.getPropertyValue('--second-600');

    function encode(data) {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_lezjbyt';
        const templateId = 'template_olxpyad';
        const publicKey = 'xw0B6BEku4_Ej3Gxy';

        const templateParams = { from_name: name, from_email: email, to_name: 'Web Wizard', message: message };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
                setSubject('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

        if (name.length === 0 && email.length === 0 && message.length === 0) {
            return;
        }

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', name, email, message, subject }),
        })
            .then(() => {
                // Sử dụng template literals để nhúng kết quả của hàm t vào chuỗi
                alert(t('contact.contactAlert'));
            })
            .catch((error) => alert(error));
    };

    useEffect(() => {
        function handleMessageCount() {
            const messageLength = message.length;
            const charLeft = messageMaxLength - messageLength;
            setCharCount(charLeft);
        }
        handleMessageCount();
    }, [message]);

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="contact-heading textHeading">Contact</h2>
                <div className="contact-content">
                    <div className="contact-left">
                        <h3 className="textHeading"> {t('contact.text1')}</h3>
                        <p
                            style={{
                                color: darkMode ? 'var(--gray-60)' : 'var(--black-60)',
                            }}
                        >
                            {' '}
                            {t('contact.text2')}
                        </p>
                        <p className="contact-info">
                            <PhoneOutlined
                                style={{
                                    paddingRight: '8px',
                                    fontSize: 'var(--fontSize16)',
                                }}
                            />{' '}
                            <span
                                className="contact-info-text"
                                style={{
                                    color: color.trim(),
                                }}
                            >
                                {' '}
                                0839 851 729
                            </span>
                        </p>
                        <p className="contact-info">
                            <MessageOutlined
                                style={{
                                    paddingRight: '8px',
                                    fontSize: 'var(--fontSize16)',
                                }}
                            />
                            <span
                                className="contact-info-text"
                                style={{
                                    color: color.trim(),
                                }}
                            >
                                {' '}
                                anhlamot55@gmail.com
                            </span>
                        </p>
                        <p className="contact-info">
                            <EnvironmentOutlined
                                style={{
                                    paddingRight: '8px',
                                    fontSize: 'var(--fontSize16)',
                                }}
                            />
                            <span
                                className="contact-info-text"
                                style={{
                                    color: color.trim(),
                                }}
                            >
                                {' '}
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
                            <div className="contact-box">
                                <div className={`input-container ${name.length >= 1 ? 'focused' : ''}`}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="form-input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        style={{
                                            // background: darkMode ? 'var(--textColorlight)' : 'var(--textColorDark)',
                                            color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
                                            border: darkMode ? '1px solid var(--gray-30)' : '1px solid var(--black-30)',
                                        }}
                                    />
                                    <label
                                        htmlFor="name"
                                        style={{
                                            color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
                                        }}
                                    >
                                        Name: <br />
                                    </label>
                                </div>
                                <div className={`input-container ${email.length >= 1 ? 'focused' : ''}`}>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="form-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{
                                            // background: darkMode ? 'var(--textColorlight)' : 'var(--textColorDark)',
                                            color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
                                            border: darkMode ? '1px solid var(--gray-30)' : '1px solid var(--black-30)',
                                        }}
                                    />
                                    <label
                                        htmlFor="email"
                                        style={{
                                            color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
                                        }}
                                    >
                                        Email: <br />
                                    </label>
                                </div>
                            </div>
                            <div className={`input-container ${message.length >= 1 ? 'focused' : ''}`}>
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    className="form-input"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    maxLength={messageMaxLength}
                                    style={{
                                        // background: darkMode ? 'var(--textColorlight)' : 'var(--textColorDark)',
                                        color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
                                        border: darkMode ? '1px solid var(--gray-30)' : '1px solid var(--black-30)',
                                    }}
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    style={{
                                        color: darkMode ? 'var(--textColorDark)' : 'var(--textColorlight)',
                                    }}
                                >
                                    Message:
                                    <br />{' '}
                                </label>
                                <small
                                    className="contact-charaters"
                                    style={{
                                        color: color.trim(),
                                    }}
                                >
                                    <span id="message-count">
                                        {charCount >= 0 ? charCount : 'Thank you for your message'}
                                    </span>{' '}
                                    characters
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
export default Contact;
