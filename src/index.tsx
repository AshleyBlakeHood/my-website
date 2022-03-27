import React from 'react';
import ReactDOM from 'react-dom';
import './sass/site.scss';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './features/components/BaseLayout';

ReactDOM.render(
  <React.StrictMode>
    <BaseLayout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
