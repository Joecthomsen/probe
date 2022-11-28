import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
    dsn: "https://abfda4b1e4ac4218b29ff0ef40579c54@o4504164101128192.ingest.sentry.io/4504164113645570",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.2,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
