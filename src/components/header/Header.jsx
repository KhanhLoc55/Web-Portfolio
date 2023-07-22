import React, { useContext, useEffect, useState } from "react";
import "./header.scss";
import LogoImg from "../../assets/KL-textLogo.svg";
import LogoImgWhite from "../../assets/KL-textLogowhite.svg";
import Language from "../languages/Language";
import Toggle from "../toggle/Toggle";

// Ngôn ngữ
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../utils/context";

const Header = () => {
  // Sử dụng react-i18next để dễ dàng dịch nội dung
  const { t } = useTranslation();

  // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Ảnh logo hiện tại
  const [currentLogo, setCurrentLogo] = useState(LogoImg);

  // Hiển thị box shadow của header khi cuộn trang
  const [showBoxShadow, setShowBoxShadow] = useState(false);

  // Xử lý sự kiện cuộn trang để hiển thị box shadow
  const handleScroll = () => {
    const header = document.getElementById("header");
    if (header) {
      const headerRect = header.getBoundingClientRect();
      const shouldShowBoxShadow = window.scrollY > headerRect.bottom;
      setShowBoxShadow(shouldShowBoxShadow);
    }
  };

  // Thêm listener cho sự kiện cuộn trang khi thành phần được tạo
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cập nhật ảnh logo khi chủ đề thay đổi
  useEffect(() => {
    // Nếu darkMode được bật, sử dụng LogoImg2, ngược lại sử dụng LogoImg
    setCurrentLogo(darkMode ? LogoImgWhite : LogoImg);
  }, [darkMode]);

  return (
    <header className="header" id="header">
      <div
        className="container"
        style={{
          // Chọn màu nền và màu chữ dựa vào chủ đề
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",

          // Hiển thị hoặc ẩn box shadow dựa vào trạng thái showBoxShadow
          boxShadow: showBoxShadow ? "0 5px 15px rgba(0,0,0,.1)" : "none",
        }}
      >
        <img className="header__logo-img" alt="logo" src={currentLogo} />
        <div className="header__wrapper">
          {/* Phần bên trái của header */}
          <div className="header-left">
            <div className="header-list">
              <ul className="header-item">
                {/* Sử dụng react-i18next để dễ dàng dịch các mục */}
                <li className="header-text">{t("header.headerSkills")}</li>
                <li className="header-text">{t("header.headerExperience")}</li>
                <li className="header-text">{t("header.headerProjects")}</li>
                <li className="header-text">{t("header.headerContact")}</li>
              </ul>
            </div>
          </div>

          {/* Phần bên phải của header */}
          <div className="header-right">
            {/* Toggle cho chủ đề tối / sáng */}
            <Toggle />

            {/* Chọn ngôn ngữ */}
            <Language />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
