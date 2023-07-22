import React, { useState, useEffect, useContext } from "react";
import "./toggle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../utils/context";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkmode");
    if (darkMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  const handleDarkModeToggle = () => {
    theme.dispatch({ type: "TOGGLE" });
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkmode", !isDarkMode);
  };

  return (
    <div className="toggle__container">
      <div
        className={`btn${isDarkMode ? " darkmode" : ""} `}
        onClick={handleDarkModeToggle}
      >
        <div className="toggle__container-circle">
          <div className="toggle__btn-icon">
            <FontAwesomeIcon
              icon={isDarkMode ? faMoon : faSun}
              className="toggle__icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeButton;
