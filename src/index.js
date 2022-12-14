import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// import {BrowserRouter} from 'react-router-dom/BrowserRouter'



const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
    // <BrowserRouter basename={ProcessingInstruction.env.PUBLIC_URL}>
        <App />
    // </BrowserRouter>

)
