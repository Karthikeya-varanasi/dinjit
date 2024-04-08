import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/Styles/Style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
AOS.init();
reportWebVitals();
