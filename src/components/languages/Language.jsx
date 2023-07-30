import React, { useContext } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../utils/context";

const Language = () => {
  // Trạng thái chủ đề của ứng dụng (tối hoặc sáng)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { i18n } = useTranslation();
  const dropdownStyles = {
    position: "static",
  };
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <NavDropdown
        title={i18n.language === "vi" ? "Vi" : "En"}
        id="collasible-nav-dropdown"
        style={dropdownStyles}
        className="language"
      >
        <NavDropdown.Item onClick={() => handleChangeLanguage("en")}>
          <div
            className="btn"
            style={{
              // Chọn màu nền và màu chữ dựa vào chủ đề}
              backgroundColor: darkMode ? "rgba(17, 21, 28, 0.50)" : "#ffffff",
              color: darkMode ? "#e8e8e8" : "#545454",
            }}
          >
            English
          </div>
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleChangeLanguage("vi")}>
          <div
            className="btn"
            style={{
              // Chọn màu nền và màu chữ dựa vào chủ đề}
              backgroundColor: darkMode ? "rgba(17, 21, 28, 0.50)" : "#ffffff",
              color: darkMode ? "#e8e8e8" : "#545454",
            }}
          >
            Việt nam
          </div>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Language;
