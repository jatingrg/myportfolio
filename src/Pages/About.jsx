import React, { useState } from "react";
import "./About.css";

function About() {
  const [selectedFile, setSelectedFile] = useState("education");

  const renderContent = () => {
    switch (selectedFile) {
      case "bio":
        return `/**
* About Me
* Passionate developer with a strong focus
* on frontend development and user experience.
* Currently exploring full-stack technologies.
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
* Chitkara University
* B.E. Computer Science (2020–2024)
*
* High School - ABC School
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
            <div className={`folder ${selectedFile === "bio" ? "active" : ""}`} onClick={() => setSelectedFile("bio")}>
              <span>📄</span> bio
            </div>
            <div className={`folder ${selectedFile === "interests" ? "active" : ""}`} onClick={() => setSelectedFile("interests")}>
              <span>📄</span> interests
            </div>
             <div className={`folder ${selectedFile === "interests" ? "active" : ""}`} onClick={() => setSelectedFile("skills")}>
              <span>📄</span> skills
            </div>
            <div className={`folder ${selectedFile === "education" ? "active" : ""}`} onClick={() => setSelectedFile("education")}>
              <span>📂</span> education
              <div className="subfolder">📄 high-school</div>
              <div className="subfolder">📄 university</div>
            </div>
          </div>

          <div className="section-label">contacts</div>
          <div className="contact-info">📧 jatingarg94786@gmail.com</div>
          <div className="contact-info">📞 +91 8847414135</div>

          <div className="footer-icons">
              <a href="/resume.pdf" download>
    <button style={{ 
    padding: "10px 20px", 

    color: "#fff", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer" 
  }}>
    Download Resume
  </button>
</a>
          </div>
        </div>

        <div className="code-area">
          <div className="code-header">{selectedFile}.js</div>
          <pre className="code-block">{renderContent()}</pre>
        </div>

        <div className="snippet-showcase">
          <p>// Code snippet showcase:</p>
          <div className="snippet">
            <p className="snippet-meta">@username · 5 months ago · ⭐ 3 stars</p>
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
    </div>
  );
}

export default About;
