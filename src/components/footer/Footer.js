import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("© " + new Date().getFullYear() + " Henry Mwangi. All Rights Reserved.")}
        </p>
        
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <small>
            Phone: <a href="tel:+254110300712">+254 110 300 712</a> &nbsp;|&nbsp; 
            Email: <a href="mailto:mwangihenry336@gmail.com">mwangihenry336@gmail.com</a>
          </small>
        </p>
        
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <small>
            Based on{" "}
            <a
              href="https://github.com/i-mwangi/my-portfolio-"
              target="_blank"
              rel="noreferrer"
            >
              developerFolio
            </a>
          </small>
        </p>
      </div>
    </Fade>
  );
}
