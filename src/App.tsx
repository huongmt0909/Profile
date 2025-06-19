import "./App.css";
import avatar from "./assets/avatar.jpg";
import Facebook from "./assets/facebook.svg?react";
import Github from "./assets/github.svg?react";
import Linkedin from "./assets/linkedin.svg?react";
import { useEffect, useRef, useState } from "react";
import TimeLine from "./TimeLine";
import ghequa from "./assets/ghequa.mp3";
import Play from "./assets/play.svg?react";
import Pause from "./assets/pause.svg?react";

function App() {
  const [percent, setPercent] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSeeMore = () => {
    setShowOverlay(false);
    handlePlay();
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

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
            <div
              className={`flip-card${isFlipped ? " flipped" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="flip-card-back">
                  {isPlaying ? (
                    <Pause
                      style={{ width: 80, height: 80 }}
                      onClick={handlePause}
                    />
                  ) : (
                    <Play
                      style={{ width: 80, height: 80 }}
                      onClick={handlePlay}
                    />
                  )}
                </div>
              </div>
            </div>
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
              onClick={handleSeeMore}
              style={{ pointerEvents: showSeeMore ? "auto" : "none" }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      <div className="progress-counter font-hand-pre">{percent}%</div>
    </div>
  );

  return (
    <div className="app">
      <audio ref={audioRef} src={ghequa} loop />
      {renderFrontApp()}
      <div className="main-info">
        <div className="explain-text">
          <h1>Hello world!</h1>
          <p>
            I'm Huong, a web and Flutter application developer with a passion
            for crafting modern, intuitive interfaces and delivering exceptional
            user experiences. I focus on blending design and performance to
            build systems that are not only visually appealing but also smooth
            and user-friendly. With a mindset of continuous learning, I'm always
            seeking opportunities to enhance my skills and contribute to
            creative, meaningful projects.
          </p>
        </div>
        <div className="border-line" />
        <div className="explain-text">
          <p>
            Outside of work, I enjoy exploring new design trends, experimenting
            with UI/UX prototypes, and contributing to open-source projects when
            possible. In my free time, I often read books on personal
            development or unwind with music and play games.
          </p>
        </div>
        <div className="border-line" />
      </div>
      <TimeLine />
    </div>
  );
}

export default App;
