import React from "react";

import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";

const SideBar = ({ setChatLog }) => {
  const clearChat = () => {
    setChatLog([]);
  };

  return (
    <aside className="sidemenu">
      <div className="side-menu-button" onClick={clearChat}>
        <span>+</span>
        New Chat
      </div>
      <div className="project-info">
        <div className="about">
          <h2>About this project -</h2>
          <p>It's a ChatGPT clone.</p>
          <p>
            Since ChatGPT is all over the internet now days, I thought I should
            create a clone of it to learn more about it, how it works and
            obviously to sharpen in development skills.
          </p>
         
        </div>
        <div className="rules">
          <h2>Rules to use -</h2>
          <p>
            Please! Don't abuse the AI by asking too much questions. Since it's
            a sample project, I have limited credits of API. So, Kindly consider
            it and feel free to give a test drive.
          </p>
        </div>
        <div className="creator">
          <h2>Developer</h2>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="link-icon">
              <img src={twitter} alt="twitter" />
            </div>
            <span></span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="link-icon">
              <img src={github} alt="github" />
            </div>
            <span></span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
