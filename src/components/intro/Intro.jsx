import React from "react";
import "./intro.scss";
import { useTypewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

//img
import Avatar from "../../assets/avatar.png";
import WavingHand from "../../assets/wavingHand.svg";
import iconBe from "../../assets/iconBe.svg";
import iconGithub from "../../assets/iconGithub.svg";
import iconGmail from "../../assets/iconGmail.svg";
import iconLinkedin from "../../assets/iconLinkedin.svg";
import cv from "../../assets/cvđanglàm.pdf";

const Intro = () => {
  const { t } = useTranslation();

  const [text] = useTypewriter({
    words: ["Graphic Designer.", "Front End Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="intro" id="intro">
      <div className="container">
        <div className="i-left">
          <div className="wrapperLeft">
            <div className="textContentLeft noScroll">
              <span className="texTitle">{t("intro.textHey")}!</span>

              <img src={WavingHand} alt="" className="wavingHand" />
              <span className="texTitle"> {t("intro.texMyNameIs")}</span>
            </div>

            <h1 className="i-heading1">NGUYỄN KHÁNH LỘC</h1>
            <h3 className="i-heading3">
              {t("intro.textImAWeb")}
              <span className="i-text-smail">{text}</span>
            </h3>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident quod ut sapiente voluptatum qui laborum deleniti aperiam
              nam totam quia eaque unde dolores eligendi dicta, pariatur vitae
              dolorum. Fugiat, velit.
            </span>
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
                <a href="" target="" className="i-link">
                  <img src={iconGmail} alt="Gmail" className="i__icon-img" />
                </a>
              </div>
              <div className="i-backgroupdS">
                <a href="" className="i-link">
                  <img
                    src={iconLinkedin}
                    alt="Linkedin"
                    className="i__icon-img"
                  />
                </a>
              </div>
              <div className="i-backgroupdS">
                <a href="" className="i-link">
                  <img src={iconGithub} alt="Github" className="i__icon-img" />
                </a>
              </div>
            </div>
            <div className="cv">
              <button className="button-40 button--flex">
                <a download="cvđanglàm.pdf" href={cv}>
                  Download cv
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="i-right">
          <img src={Avatar} alt="" className="imgAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
