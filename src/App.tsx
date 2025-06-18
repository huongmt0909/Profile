import "./App.css";
import avatar from "./assets/avatar.jpg";
import Facebook from "./assets/facebook.svg?react";
import Github from "./assets/github.svg?react";
import Linkedin from "./assets/linkedin.svg?react";
import { useEffect, useState } from "react";

function App() {
  const [percent, setPercent] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [showSeeMore, setShowSeeMore] = useState(false);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s
    const step = 10; // ms
    const totalSteps = duration / step;
    const increment = 100 / totalSteps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= 100) {
        setPercent(100);
        clearInterval(interval);
      } else {
        setPercent(Math.floor(start));
      }
    }, step);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent === 100) {
      setTimeout(() => setShowSeeMore(true), 100);
    }
  }, [percent]);

  const renderFrontApp = () => (
    <div className={`front-overlay${showOverlay ? "" : " hide"}`}>
      <div className="app-header">
        <div className="app-header-left">
          <div className="app-header-left-logo">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="app-header-left-name">
            <h1 className="font-hand-pre">Hướng MT</h1>
          </div>
          <div className="app-header-left-email">
            <a href="mailto:huongmt.0909@gmail.com" className="font-hand-pre">
              huongmt.0909@gmail.com
            </a>
          </div>
          <div className="app-header-left-social">
            <a
              href="https://www.facebook.com/huongmt.0909/"
              target="_blank"
              rel="noopener noreferrer"
              className="app-header-left-social-facebook"
            >
              <Facebook
                className="social-icon"
                color="white"
                width={60}
                height={60}
                style={{ animationDelay: "0s" }}
              />
            </a>
            <a
              href="https://github.com/huongmt0909"
              target="_blank"
              rel="noopener noreferrer"
              className="app-header-left-social-facebook"
            >
              <Github
                className="social-icon"
                color="white"
                width={60}
                height={60}
                style={{ animationDelay: "0.2s" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/h%C6%B0%E1%BB%9Bng-mt-9b04a8345/"
              target="_blank"
              rel="noopener noreferrer"
              className="app-header-left-social-facebook"
            >
              <Linkedin
                className="social-icon"
                color="white"
                width={60}
                height={60}
                style={{ animationDelay: "0.4s" }}
              />
            </a>
          </div>
          <div className="app-header-see-more">
            <button
              className={`see-more-btn font-hand-pre${
                showSeeMore ? " see-more-animate" : ""
              }`}
              onClick={() => setShowOverlay(false)}
              style={{ pointerEvents: showSeeMore ? "auto" : "none" }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      <div className="progress-counter">{percent}%</div>
    </div>
  );

  return (
    <div className="app">
      {renderFrontApp()}
      <div className="main-content">main</div>
    </div>
  );
}

export default App;
