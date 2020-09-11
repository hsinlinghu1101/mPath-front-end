import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MPathProvider } from './context/MPathContext'
import './index.css';
import App from './components/App/App';


ReactDOM.render(
  <BrowserRouter>
   <MPathProvider>
    <App />
   </MPathProvider>
  </BrowserRouter>
    
  ,
  document.getElementById('root')
);

