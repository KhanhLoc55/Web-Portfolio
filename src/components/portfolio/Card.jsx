import React, { useState } from "react";
import heart from "../../assets/system-uicons_heart.svg";
import arrowRight from "../../assets/arrowRightUp.svg";
import modalClose from "../../assets/modal-close.svg";
import Sourcecode from "../../assets/Source-code.svg";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    document.body.classList.toggle("active-modal");
    console.log("Modal status:", modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="modal-box">
        <div className="modal-img">
          <img src={props.img} alt={props.title} onClick={toggleModal} />
        </div>
        <div className="modal-category">
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <img className="icon-heart" src={heart} /> {props.totalLike}
          </label>
        </div>
        <div className="modal-title">
          <h2 className="modal-heading2" onClick={toggleModal}>
            {props.title}
          </h2>
          <a href="#popup" className="modal-arrow" onClick={toggleModal}>
            <img src={arrowRight} alt="" className="" />
          </a>
        </div>
      </div>

      {/* Popup*/}
      {modal && (
        <div className="modal-container">
          <div onClick={toggleModal} className="modal-overlay"></div>
          <div className="modal-content">
            <div className="modal-content-box">
              <div className="modal-img">
                <img src={props.img} alt={props.title} />
              </div>
              <div className="modal-text">
                <span>Featured - Design</span>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <p>
                  Consectetur adipisicing elit. Cupiditate distinctio assumenda.
                  dolorum alias suscipit rerum maiores aliquam earum odit, nihil
                  culpa quas iusto hic minus!
                </p>
                <div className="modal__button">
                  <button className="modal__button-content">
                    <div className="modal__button-link">
                      <a href="https://github.com/KhanhLoc55" target="__blank">
                        Source code
                      </a>
                      <img src={Sourcecode} alt="" />
                    </div>
                  </button>
                  <button className="modal__button-content">
                    <div className="modal__button-link">
                      <a
                        href="https://www.behance.net/anhlamot55"
                        target="__blank"
                      >
                        View project
                      </a>
                      <img src={Sourcecode} alt="" />
                    </div>
                  </button>
                </div>
                <button className="modalClone" onClick={toggleModal}>
                  <img src={modalClose} alt="" className="modalClose-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
