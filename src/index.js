import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (!localStorage.theme) {
  localStorage.theme = "dark";
  document.documentElement.classList.add("dark");
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

