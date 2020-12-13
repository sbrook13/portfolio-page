import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Header () {

  return (
    <header className="App-header">
      <h1>Shelley Brook</h1>
      <div>
        <a href="mailto:sbrook13@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="white"/>
        </a>
        <a href="https://github.com/sbrook13">
          <FontAwesomeIcon icon={faGithub} size="2x" color="white"/>
        </a>
        <a href="https://www.linkedin.com/in/sbrook13/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="white"/>
        </a>
      </div>
      <FontAwesomeIcon icon={faChevronDown} size="2x" color="white" />
    </header>
  );
}

export default Header;