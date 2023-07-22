import "./skill.scss";

import React, { useEffect } from "react";
const Skill = () => {
  useEffect(() => {
    const updateProgressBars = () => {
      const progressBars = document.querySelectorAll(".progress .progress-bar");
      progressBars.forEach((progressBar) => {
        progressBar.style.width =
          progressBar.getAttribute("aria-valuenow") + "%";
      });
    };

    // Call the updateProgressBars function on initial render
    updateProgressBars();

    // Add a scroll event listener to call updateProgressBars when scrolling
    const handleScroll = () => {
      updateProgressBars();
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="skills-title">
          <h2 className="skills-heading">Skills</h2>
        </div>
        <h4 style={{ marginTop: "40px" }}>
          <i>Tool</i>
        </h4>
        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">
                Html / Css <i className="val">60%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Photoshop / Illustrator<i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Javascript<i className="val">40%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Figma<i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Sass / Bootstrap / Tailwindcss<i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Word / Excel / Powerpoint <i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                React<i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Adobe Xd<i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <h4 style={{ marginTop: "40px" }}>
          <i>Skill</i>
        </h4>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Prototyping <i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Wireframing<i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Web design<i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                Mobile design<i className="val">50%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
