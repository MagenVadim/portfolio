import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Components/Home/home.css"
import "./Components/About/about.css"
import "./Components/Services/services.css"
import "./Components/Portfolio/portfolio.css"
import "./Components/Contact/contact.css"
import "./style-switcher.css"

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
