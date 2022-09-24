import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import ErrorBoundry from './ErrorBoundry';
// import TestCounter from './Render/TestCounter';



//import Quiz from './Quiz/Quiz';
import App from './App'
import Mapping from './Mapping';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundry>
    <BrowserRouter>
     <App/>
    </BrowserRouter>

    </ErrorBoundry>
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
