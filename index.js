// Now you don't need to import it...because React team decided to make the React module automatically available in all files that contain JSX. This means that you no longer need to import the React module explicitly, unless you want to use some of its properties or methods directly (e.g. React.Component).
// import React from 'react';
// import ReactDom from 'react-dom'; // ReactDom is no longer supported in React 18
import { createRoot } from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { StrictMode } from 'react';

// ReactDom.render(
//     <App />, document.getElementById('root')
// );

// First, you'll need to set up your app to work with React Router. Everything that gets rendered will need to go inside the <BrowserRouter> element, so wrap your App in those first.
const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);