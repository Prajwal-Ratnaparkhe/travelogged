import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Updated import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container); // ✅ createRoot for React 18+

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
