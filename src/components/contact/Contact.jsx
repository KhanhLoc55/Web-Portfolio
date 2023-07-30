import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./contact.scss";

const Contact = () => {
  const messageMaxLength = 1000;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(1000);
  const { t } = useTranslation(); // Sử dụng hook useTranslation để lấy các hàm và biến liên quan đến việc dịch ngôn ngữ

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    if (name.length === 0 && email.length === 0 && message.length === 0) {
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message, subject }),
    })
      .then(() => {
        alert(
          `Thank you for your message.I'll get back to you very soon! Have a great day!`
        );
      })
      .catch((error) => alert(error));
  }

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
        <div className="container-title">
          <h2 className="container-heading">{t("contact.textContact")}</h2>
        </div>
        <div className="contact-center">
          <div className="contact-info">
            <h3> {t("contact.text1")}</h3>
            <p> {t("contact.text2")}</p>
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <span>{t("contact.text3")}</span>
              </li>
              <li className="contact-info-item">
                {t("contact.textIphone")}{" "}
                <a href="tel:+839851729"> 0839 851 729</a>
              </li>
              <li className="contact-info-item">
                Email:
                <a href="anhlamot55@gmail.com"> anhlamot55@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="contact-box">
                <div
                  className={`input-container ${
                    name.length >= 1 ? "focused" : ""
                  }`}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name">
                    Name: <br />
                  </label>
                </div>
                <div
                  className={`input-container ${
                    email.length >= 1 ? "focused" : ""
                  }`}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">
                    Email: <br />
                  </label>
                </div>
              </div>

              <div
                className={`input-container ${
                  message.length >= 1 ? "focused" : ""
                }`}
              >
                <textarea
                  required
                  id="message"
                  name="message"
                  className="form-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={messageMaxLength}
                ></textarea>
                <label htmlFor="message">
                  Message:
                  <br />{" "}
                </label>
                <small>
                  <span id="message-count">
                    {charCount >= 0 ? charCount : "Thank you for your message"}
                  </span>{" "}
                  characters
                </small>
              </div>
              <div className="contact-btn">
                <button type="submit" className="btn">
                  {t("contact.textMessage")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
