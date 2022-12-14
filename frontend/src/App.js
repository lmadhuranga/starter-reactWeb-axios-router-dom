import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './Pages/HomePage/HomePage'; 
import BlogPage from './Pages/BlogPage/BlogPage'; 
import ArticleEdit from './Pages/BlogPage/ArticleEdit'; 
 
function App(params) {
   return(
      <Router>
         <Routes>
            {/* <Route exact path="/" element={<HomePage/>}/>   */}
            <Route exact path="/blog" element={<BlogPage/>}/>  
            <Route exact path="/" element={<BlogPage/>}/>  
            <Route exact path="/articleEdit/:id" element={<ArticleEdit/>}/>  
         </Routes>
      </Router>
   );
}
export default App;
 
 