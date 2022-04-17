import React from 'react';
import BaseHeader from '../BaseHeader';

const BaseLayout: React.FC = ({children}) => {
    return (
        <div className="c-app">
          <BaseHeader></BaseHeader>
          {children}
          <header className="c-app-header">
            <p>
              Ashley Blake-Hood
            </p>
          </header>
        </div>
      );
}

export default BaseLayout;