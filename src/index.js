import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{backgroundColor : "#01579b"}}>
  <React.StrictMode>
    <App  />
  </React.StrictMode>
  </div>
);

