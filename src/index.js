import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Pages/HomePage/HomePage'; 
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <Routes>
        <Route exact path="/" element={<HomePage/>}/>  
     </Routes>
  </Router>
);
 