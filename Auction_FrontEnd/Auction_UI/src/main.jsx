import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Create a root
const container = document.getElementById('root');
const root = createRoot(container);  // createRoot(container) is the new API

// Initial render
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
