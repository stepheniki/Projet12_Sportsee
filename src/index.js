import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import ReactRoutes from './Routes';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactRoutes />
  </React.StrictMode>
);


