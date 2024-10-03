import React from 'react';
import ReactDOM from 'react-dom/client';
import "./app/styles/index.scss";
import App from "./app"
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
</BrowserRouter>
);


reportWebVitals();
