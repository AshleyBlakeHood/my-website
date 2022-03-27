import React from 'react';
import logo from '../../../logo.svg';
import BaseHeader from '../BaseHeader';

const BaseLayout: React.FC = ({children}) => {
    return (
        <div className="c-app">
          <BaseHeader></BaseHeader>
          <header className="c-app-header">
            <img src={logo} className="c-app-logo" alt="logo" />
            <p>
              Ashley Blake-Hood
            </p>
          </header>
        </div>
      );
}

export default BaseLayout;