import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Header () {

  const iconStyle = {
    color: "white",
    padding: "1rem",
  }

  const mainContent = {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw"
  }

  const rowStyle ={
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <header className="App-header">
      <div style={mainContent}>
        <h1>Shelley Brook</h1>
        <p>Full Stack Software Engineer</p>
        <div style={rowStyle}>
          <a href="mailto:sbrook13@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" style={iconStyle}/>
          </a>
          <a href="https://github.com/sbrook13">
            <FontAwesomeIcon icon={faGithub} size="2x" color="white" style={iconStyle}/>
          </a>
          <a href="https://www.linkedin.com/in/sbrook13/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" style={iconStyle}/>
          </a>
        </div>
      </div>
      <FontAwesomeIcon icon={faChevronDown} size="2x" color="white" className="bounce arrow"/>
    </header>
  );
}

export default Header;