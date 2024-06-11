import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { GoogleMapsProvider } from './contexts/location/GoogleMapsContext';

const apiKey = 'AIzaSyAOEatSLRac4OG2bfIySYe6l8aV61Fm_rc'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleMapsProvider apiKey={apiKey}>
      <App />
    </GoogleMapsProvider>
  </React.StrictMode>
);

