import React from 'react';
import logo from '../../assets/logo.svg';
import '../../css/components/Info.css';

const Info = () => {
    return (
      <div className="Info">
        <header className="Info-header">
          <img src={logo} className="Info-logo" alt="logo" />
          <h1 className="Info-title">Welcome to React</h1>
        </header>
        <p className="Info-intro">
          To edit this page go to <code>src/elements/components/Info.js</code> and save to reload.
        </p>
      </div>
    );
  }

export default Info;
