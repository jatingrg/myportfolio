import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !message){
      alert('Fill input data')
      return;
    }

    const messageData = {
      name,
      email,
      message,
      date: new Date().toDateString(),
    };

    console.log("Sending message:", messageData);

    alert("Message sent! Check console for data.");
  };

  return (
    <div className="about-wrapper">
      <div className="main-content">
               <div className="sidebar">
          <div className="section-label">contacts</div>
          <div className="contact">
            <div className="contact-info">📧 jatingarg94786@gmail.com</div>
            <div className="contact-info">📞 +91 8847414135</div>
          </div>

          <div className="section-label">find-me-also-in</div>
          <div className="contact">
            <div className="contact-info">🔗 YouTube</div>
            <div className="contact-info">🔗 dev.to</div>
            <div className="contact-info">🔗 Instagram</div>
            <div className="contact-info">🔗 Twitch</div>
          </div>

          <div className="footer-icons">
            find me in:
            <span>❌</span>
            <span>🔗</span>
          </div>
        </div>

        {/* Form Area */}
        <div className="code-area">
          <form onSubmit={handleSubmit}>
            <label>_name</label>
            <input
              type="text"
              placeholder="Enter a name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>_email</label>
            <input
              type="email"
              placeholder="Enter an Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>_message</label>
            <textarea
              placeholder="Write a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <button type="submit" className="submit-button">
              submit-message
            </button>
          </form>
        </div>

        {/* Code Snippet Area */}
        <div className="snippet-showcase">
          <p>// Code snippet showcase:</p>
          <div className="snippet">
            <p className="snippet-meta">@username · 5 months ago · ⭐ 3 stars</p>
            <div
  className="code-snippet"
  dangerouslySetInnerHTML={{
    __html: `
  const button = document.querySelector('#sendBtn');

  const message = {
  name: "<span class='message-text'>${name}</span>",
  email: "<span class='message-text'>${email}</span>",
  message: "<span class='message-text'>${message}</span>",
  date: "<span class='message-text'>${new Date().toDateString()}</span>"
};
 button.addEventListener('click', () => {
	form.send(message);
})`
  }}
></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
