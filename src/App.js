import React from 'react'
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Footer from './components/footer/Footer';
import Portfolio from './components/project/Portfolio';
import ContactMe from './components/contact/ContactMe';
import Resume from './components/resume/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/ReactPortfolio/' element={<AboutMe />} />
          <Route exact path='/about-me' element={<AboutMe />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/contact' element={<ContactMe />} />
          <Route exact path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
