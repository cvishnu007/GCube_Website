import React from 'react';
import './App.css'; // Adjust the path as necessary
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home2';
import About from './pages/about';
import Footer from './components/footer';
import Games from './pages/games';
import Contact from './pages/contact';

const App = () => {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}> {/* Permanent black background */}
      <Router>
        {/* <NavigationBar username="JohnDoe" />  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;