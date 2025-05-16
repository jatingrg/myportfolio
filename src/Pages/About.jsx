import React, { useState } from "react";
import "./About.css";

function About() {
  const [selectedFile, setSelectedFile] = useState("education");
  const [showResumeModal, setShowResumeModal] = useState(false);

  const renderContent = () => {
    switch (selectedFile) {
      case "bio":
        return `/**
* About Me
* Highly skilled and motivated Full Stack Web Developer proficient in MERN stack. Demonstrated ability in successfully
building both solo and collaborative projects. Possesses strong technical expertise in front-end and back-end development,
coupled with excellent problem-solving and communication skills. Ready to contribute to innovative and impactful web
development initiatives
*/`;
      case "interests":
        return `/**
* Interests
* UI/UX Design, 3D Web, Animations, Open Source
* Exploring AI tools and creative coding
*/`;
      case "education":
        return `/**
* Education
* Chitkara University CGPA - 8.55
* B.E. Computer Science (2021–2025)
*
* 
*/`;
      case "skills":
        return `/**
* HTML
* CSS
* JavaScript
*
* React.js
* Chakra UI

* DSA
*/`;
      default:
        return `/**
* Select a section to view its contents
*/`;
    }
  };

  return (
    <div className="about-wrapper">
      <div className="main-content">
        <div className="sidebar">
          <div className="section-label">personal-info</div>
          <div className="folder-group">
            <div
              className={`folder ${selectedFile === "bio" ? "active" : ""}`}
              onClick={() => setSelectedFile("bio")}
            >
              <span>📄</span> bio
            </div>
            <div
              className={`folder ${
                selectedFile === "interests" ? "active" : ""
              }`}
              onClick={() => setSelectedFile("interests")}
            >
              <span>📄</span> interests
            </div>
            <div
              className={`folder ${selectedFile === "skills" ? "active" : ""}`}
              onClick={() => setSelectedFile("skills")}
            >
              <span>📄</span> skills
            </div>
            <div
              className={`folder ${
                selectedFile === "education" ? "active" : ""
              }`}
              onClick={() => setSelectedFile("education")}
            >
              <span>📂</span> education
              <div className="subfolder">📄 high-school</div>
              <div className="subfolder">📄 university</div>
            </div>
          </div>

          <div className="section-label">contacts</div>
          <div className="contact-info">📧 jatingarg94786@gmail.com</div>
          <div className="contact-info">📞 +91 8847414135</div>

          <div className="footer-icons">
            <button
              onClick={() => setShowResumeModal(true)}
              style={{
                padding: "10px 20px",
                backgroundColor: "",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View Resume
            </button>
          </div>
        </div>

        <div className="code-area">
          <div className="code-header">{selectedFile}.js</div>
          <pre className="code-block">{renderContent()}</pre>
        </div>

        <div className="snippet-showcase">
          <p>// Code snippet showcase:</p>
          <div className="snippet">
            <p className="snippet-meta">
              @username · 5 months ago · ⭐ 3 stars
            </p>
            <pre className="code-snippet">
{`function initializeModelChunk<T>(chunk) {
  const value = parseModel(chunk._response, chunk._value);
  const initializedChunk = {
    _status: "INITIALIZED",
    _value: value
  };
  return value;
}`}
            </pre>
          </div>
        </div>
      </div>

     
      {showResumeModal && (
        <div className="resume-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowResumeModal(false)}>
              &times;
            </span>
            <h3>My Resume</h3>
            <iframe
              src="/resume.pdf"
              title="Resume Preview"
              width="100%"
              height="500px"
            ></iframe>
            <a href="/resume.pdf" download>
              <button className="download-btn">Download Resume</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
