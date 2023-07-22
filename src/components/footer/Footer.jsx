import React from "react";
import "./footer.scss";
import iconBe from "../../assets/iconBe.svg";
import iconGithub from "../../assets/iconGithub.svg";
import iconGmail from "../../assets/iconGmail.svg";
import iconLinkedin from "../../assets/iconLinkedin.svg";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <h3 className="footer__text-gmail">anhlamot55@gmail.com</h3>
        <div className="i-sci">
          <div className="i-backgroupdS">
            <a
              href="https://www.behance.net/anhlamot55"
              target="__blank"
              className="i-link"
            >
              <img src={iconBe} alt="Behance" className="i__icon-img" />
            </a>
          </div>
          <div className="i-backgroupdS">
            <a
              href="https://www.example.com"
              target="__blank"
              className="i-link"
            >
              <img src={iconGmail} alt="Gmail" className="i__icon-img" />
            </a>
          </div>
          <div className="i-backgroupdS">
            <a href="https://www.example.com" className="i-link">
              <img src={iconLinkedin} alt="Linkedin" className="i__icon-img" />
            </a>
          </div>
          <div className="i-backgroupdS">
            <a href="https://www.example.com" className="i-link">
              <img src={iconGithub} alt="Github" className="i__icon-img" />
            </a>
          </div>
        </div>
        <h3 className="footer__text">
          Copyright © Communitypro 2023, All rights reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
