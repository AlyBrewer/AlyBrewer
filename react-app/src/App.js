// src/App.js

import './styles/App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Blog from './blog/Blog'; 
import Projects from './blog/Projects'; 
import Photos from './blog/Photos'; 
import Other from './blog/Other'; 

function App() {
  return (
    <div className="wrapper"> 
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/projects" element={<Projects />} />
            <Route path="/blog/photos" element={<Photos />} />
            <Route path="/blog/other" element={<Other />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;