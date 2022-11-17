import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './Pages/HomePage/HomePage'; 
 
function App(params) {
   return(
      <Router>
         <Routes>
            <Route exact path="/" element={<HomePage/>}/>  
         </Routes>
      </Router>
   );
}
export default App;
 
 