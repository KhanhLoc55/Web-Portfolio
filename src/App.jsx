import React from "react";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Skill from "./components/skill/Skill";
import Resume from "./components/resume/Resume";

import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

import { ThemeContext } from "./utils/context";
import { useContext } from "react";
import { Suspense } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";

const App = () => {
  //dark mode
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Suspense fallback="...is loading">
      <div
        className="App"
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <Header />
        <Intro />
        <Skill />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
