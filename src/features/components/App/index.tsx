import React from 'react';
import logo from '../../../logo.svg';

const BaseApp: React.FC = () => {
    return (
        <div className="c-app">
          <header className="c-app-header">
            <img src={logo} className="c-app-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="c-app-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}

export default BaseApp;