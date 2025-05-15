import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
     <div className='container'>
  <div className='home_container'>
    <p className='home_container_para'>Hi all. I am</p>
    <h1 className='home_container_heading'>Jatin Garg</h1>
    <h4 className='home_container_heading4'>Front-end Developer</h4>
    <span className='home_container_profilegit'>// Find my profile on GitHub</span>
    <p className="home_container_git">
      <span className="home_container_git1">const</span>{' '}
      <span className="home_container_git2">githubLink</span>{' '}
      <span className="home_container_git3">=</span>{' '}
      <span className="home_container_git4">
        <a href="https://github.com/jatingrg" target="_blank" rel="noreferrer">
          "https://github.com/jatingrg"
        </a>
      </span>
    </p>
  </div>

  <div className="home_right_wrapper">
    <img src="/profilepic.png" alt="Profile" className="home_profilepic" />
    <div className="shape shape1"></div>
    <div className="shape shape2"></div>
  </div>
</div>

    </>
  );
}

export default Home;
