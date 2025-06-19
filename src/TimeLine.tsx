import { useEffect, useState } from "react";
import "./TimeLine.css";

const TimeLine = () => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Điều chỉnh tốc độ dịch chuyển bằng cách thay đổi hệ số (vd: 0.5)
      const offset = window.scrollY * 2;
      setTranslateY(-offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="timeline-container"
      style={{
        top: "100vh",
        transform: `translateY(${translateY}px)`,
        transition: "transform 0.1s linear",
      }}
    >
      <div className="timeline">
        <div className="timeline-row">
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-year">2018</div>
              <h3>Study at Thuy Loi University</h3>
              <p>
                I began my academic journey at Thuy Loi University, where I
                chose to major in Information Technology, driven by a strong
                passion for programming and the world of technology. From the
                very beginning, I was curious about how software systems work
                and eager to create useful, innovative tech products that make a
                real impact.
              </p>
            </div>
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-year">07/2022</div>
              <h3>Joined Bunbu company</h3>
              <p>
                I joined Bunbu as a Web and Flutter Developer, where I had the
                opportunity to work on a variety of real-world projects. This
                role allowed me to deepen my technical skills, especially in
                building modern user interfaces, optimizing performance, and
                collaborating with cross-functional teams to deliver
                high-quality products. It was also a valuable experience in
                understanding client needs and turning ideas into scalable
                solutions.
              </p>
            </div>
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-year">01/2023</div>
              <h3>Graduated from Thuy Loi University</h3>
              <p>
                After four years of study and hands-on experience, I
                successfully graduated from Thuy Loi University with a degree in
                Information Technology. My time there helped me build a strong
                foundation in software development, problem-solving, and
                teamwork. It also shaped my mindset as a developer — always
                learning, adapting, and striving to turn ideas into impactful
                digital solutions.
              </p>
            </div>
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-year">Present</div>
              <h3>Continue working at Bunbu company</h3>
            </div>
            <div className="timeline-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
